import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing1 from "../components/Listing1";
import styles from "./StandardSearch.module.css";
import { supabase } from "../Utils/SupabaseConfig";

export type StandardSearchType = {
  className?: string;
};

const StandardSearch: FunctionComponent<StandardSearchType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<any>([]);
  const [cityName, setCityName] = useState<string>("Mumbai");
  const [limit, setLimit] = useState<number>(10);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState<boolean>(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState<number>(-1);
  const filterByCity = "Mumbai"; // Example: 'Bangalore'
  const filterByFacility = ""; // Looking for 'wifi' in facilities_Summary

  const fetchListing = async () => {
    let query = supabase
      .from("Hostelv2")
      .select("*")
      .limit(limit)
      .eq("isactiveonHW", true);

    // Apply filters conditionally
    if (filterByCity) {
      query = query.ilike("city_name", `%${cityName}%`);
    }
    if (filterByFacility) {
      query = query.contains("facilitiesSummary", [filterByFacility]);
    }
    if (selectedCategories.length > 0) {
      try {
        const jsonCategories = JSON.stringify(selectedCategories);
        query = query.containedBy("category", jsonCategories);
        console.log("jsoncategories", jsonCategories);
      } catch (error) {
        console.error("Failed to convert categories to JSON:", error);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
    } else {
      setCategoryData(data);
      console.log("my data", data);
    }
  };

  useEffect(() => {
    // Fetch data when component mounts and when filters or limit changes
    fetchListing();
  }, [cityName, limit, selectedCategories]);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLimit((prevLimit) => prevLimit + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load recent searches from local storage
    const storedRecentSearches = localStorage.getItem("recentSearches");
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches));
    }
  }, []);

  useEffect(() => {
    // Save recent searches to local storage
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  if (!categoryData.length) {
    return <div>No Result for the given city</div>;
  }

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      // Show recent searches when input is cleared
      setShowRecentSearches(true);
    } else {
      setShowRecentSearches(false);
    }

    if (e.key === "Enter") {
      if (activeSearchIndex >= 0) {
        // Set city name based on selected recent search
        const search = recentSearches[activeSearchIndex];
        setCityName(search);
        setInputValue(search);
        setShowRecentSearches(false);
        setActiveSearchIndex(-1);
      } else {
        const newCity = value;
        setCityName(newCity);

        // Add to recent searches if not already present
        if (!recentSearches.includes(newCity)) {
          setRecentSearches((prevSearches) => {
            const updatedSearches = [newCity, ...prevSearches];
            // Keep only the last 5 searches
            return updatedSearches.slice(0, 10);
          });
        }
        setShowRecentSearches(false);
      }
    } else if (e.key === "ArrowDown") {
      setActiveSearchIndex((prevIndex) =>
        prevIndex < recentSearches.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setActiveSearchIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setCityName(search);
    setInputValue(search);
    setShowRecentSearches(false);
    setActiveSearchIndex(-1);
  };

  const handleChipClick = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  const handleFocus = () => {
    setShowRecentSearches(true);
  };

  const handleBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowRecentSearches(false);
    }
  };

  const choices = [
    "Party",
    "Scenery",
    "Peaceful",
    "Relax",
    "Luxurious",
    "Social",
    "Workstation",
    "Staycation",
    "Trekking",
    "Hiking",
    "Camping",
    "Other Activity",
  ];

  return (
    <div className={[styles.standardSearch, className].join(" ")}>
      <header className={styles.nav}>
        <div className={styles.airbnbNav}>
          <div className={styles.logoWrapper}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className={styles.airbnbSearch} onBlur={handleBlur}>
            <div className={styles.attributeList}>
              <div className={styles.attribute}>
                <div className={styles.attribute1}>Location</div>
                <input
                  className={styles.value}
                  type="text"
                  value={inputValue}
                  onKeyDown={handleChange}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={handleFocus}
                  spellCheck={false}
                  style={{ border: "0px solid", outline: "none" }}
                  placeholder="Search City"
                />
                {showRecentSearches && !inputValue && (
                  <div className={styles.recentSearchesBox}>
                    <div className={styles.recentSearchesHeader}>
                      Recent Searches
                    </div>
                    {recentSearches.slice(0, 10).map((search, index) => (
                      <div
                        key={index}
                        className={`${styles.recentSearchItem} ${
                          index === activeSearchIndex ? styles.active : ""
                        }`}
                        onMouseDown={() => handleRecentSearchClick(search)}
                      >
                        {search}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.searchFilters}>
              <div className={styles.divider} />
            </div>
            <div className={styles.searchFilters1}>
              <div className={styles.attribute2}>
                <div className={styles.attribute3}>Check in</div>
                <div className={styles.value1}>Feb 19-26</div>
              </div>
            </div>
            <div className={styles.searchFilters2}>
              <div className={styles.divider1} />
            </div>
            <div className={styles.iconButton} style={{ marginLeft: 20 }}>
              <div className={styles.iconButtonBase}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Join Travel Group</div>
            </div>
            <div className={styles.globeWrapper}>
              <img
                className={styles.globeIcon}
                loading="lazy"
                alt=""
                src="/globe.svg"
              />
            </div>
            <div className={styles.profileDropdown}>
              <div className={styles.menuWrapper}>
                <img
                  className={styles.menuIcon}
                  loading="lazy"
                  alt=""
                  src="/menu.svg"
                />
              </div>
              <img
                className={styles.avatarIcon}
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.navBottom}>
          <div className={styles.left}>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <img className={styles.icon1} alt="" src="/icon.svg" />
                <a className={styles.text}>Price</a>
                <img className={styles.icon2} alt="" src="/icon-1.svg" />
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.buttonBase1}>
                <img className={styles.icon3} alt="" src="/icon.svg" />
                <div className={styles.text1}>Type of place</div>
                <img className={styles.icon4} alt="" src="/icon-2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.buttonDivider}>
            <div className={styles.divider2} />
          </div>
          <div className={styles.right1}>
            {choices.map((choice, index) => (
              <div
                key={index}
                className={styles.button2}
                onClick={() => handleChipClick(choice)}
              >
                <div
                  className={[
                    styles.buttonBase2,
                    selectedCategories.includes(choice) ? styles.selected : "",
                  ].join(" ")}
                  style={{
                    color: selectedCategories.includes(choice)
                      ? "white"
                      : "inherit",
                  }}
                >
                  <img className={styles.icon7} alt="" src="/icon.svg" />
                  <div className={styles.text3}>{choice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className={styles.example} style={{ overflow: "hidden" }}>
        <div className={styles.left1}>
          <div className={styles.staysInBordeaux}>
            {categoryData.length}+ stays in {cityName}
          </div>
          <div className={styles.divider3} />
          {categoryData.map((listing: any) => {
            const imageArray = listing.images_url;
            const firstImage =
              imageArray.length > 0 ? imageArray[0] : "/default-image.png";
            return (
              <div
                key={listing.id}
                onClick={() => JSON.stringify(listing)}
                style={{ width: "100%" }}
              >
                <Listing1
                  data={listing}
                  image={firstImage}
                  subtitle={listing.name}
                  rating={listing.starRating}
                  cost={listing.lowestPrivatePricePerNight_value}
                  cityName={cityName}
                  facilities={listing.facilitiesSummary}
                  heart="/heart.svg"
                  guestsEntireHome5Beds={listing.description}
                  star="/star.svg"
                  reviewSummary={`$${listing.price_per_night}`}
                />
                <div className={styles.divider4} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default StandardSearch;
