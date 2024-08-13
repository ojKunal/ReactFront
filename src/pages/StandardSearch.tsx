import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing1 from "../components/Listing1";
import styles from "./StandardSearch.module.css";
import { supabase } from "../Utils/SupabaseConfig";
import MapComponent from "./leadlet_map";
import Calendar from "react-calendar";
import { useLocation } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import NavBar from "../components/NavBar";

export type StandardSearchType = {
  className?: string;
};

const StandardSearch: FunctionComponent<StandardSearchType> = ({
  className = "",
}) => {
  // Taking the attributes from the main page //
  const location = useLocation();
  const cityName = location.state?.cityName as string;
  // console.log("category Data is : ", categoryData);

  const searchParams = new URLSearchParams(location.search);
  const [checkin, setCheckin] = useState<string | null>(null);
  const [checkout, setCheckout] = useState<string | null>(null);
  const [param1, setParam1] = useState<string | null>(null);
  const [param2, setParam2] = useState<string | null>(null);
  const [param3, setParam3] = useState<string | null>(null);
  //end of the attributes//

  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<any>([]);
  // const [cityName, setCityName] = useState<string>("Mumbai");
  const [limit, setLimit] = useState<number>(10);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState<boolean>(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState<number>(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const filterByCity = "Mumbai"; // Example: 'Bangalore'
  const filterByFacility = ""; // Looking for 'wifi' in facilities_Summary
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

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

  const handleChipClick = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  // for Navigation //
  const handleListingClick = (id: string) => {
    const checkin = "2024-09-20"; // Example value, replace with actual data
    const checkout = "2024-09-21"; // Example value, replace with actual data
    const param1 = "value1"; // Example value, replace with actual data
    const param2 = "value2"; // Example value, replace with actual data
    const param3 = "value3"; // Example value, replace with actual data

    const searchParams = new URLSearchParams({
      checkin: checkin,
      checkout: checkout,
      param1: param1,
      param2: param2,
      param3: param3,
    });

    // const { categoryData } = location.state || {};

    const url = `/listing/${id}?${searchParams.toString()}`;
    navigate(url);
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

  const hotels = categoryData.map((listing: any) => ({
    id: listing.id,
    coordinates: [listing.latitude, listing.longitude], // Adjust based on your actual data
    thumbnail:
      listing.images_url.length > 0
        ? listing.images_url[0]
        : "/default-image.png",
    price: listing.lowestPrivatePricePerNight_value,
    details: {
      title: listing.name,
      description: "idk",
      rating: listing.overallRating_overall,
      reviews: listing.overallRating_numberOfRatings,
      dates: "Checkin -Checkout",
    },
  }));

  return (
    <div className={[styles.standardSearch, className].join(" ")}>
      <header className={styles.nav}>
        {/* <div className={styles.airbnbNav}>
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
                  placeholder="Where do you want to go?"
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
                {showSuggestions && suggestions.length > 0 && (
          <div className = {styles.recentSearchesBox} onBlur={handleBlur}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`${styles.recentSearchItem} ${
                  index === activeSearchIndex ? styles.active : ""
                }`}
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
              </div>
            </div>
            <div className={styles.searchFilters}>
              <div className={styles.divider} />
            </div>
            <div className="flex-1 flex-row">
              <div className={styles.attribute2} onClick={handleCheckInClick}>
                <div className={styles.attribute3}>Check in</div>
                <input
                  type="text"
                  className={styles.value1}
                  value={checkInDate ? checkInDate.toLocaleDateString() : ""}
                  placeholder="Select date"
                  onClick={() => setShowCheckInCalendar(true)}
                  readOnly
                />
                {showCheckInCalendar && (
                  <div className={styles.calendarContainer}>
                    <Calendar
                      onChange={(date: any) => handleCheckInDateChange(date)}
                      value={checkInDate}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.searchFilters}>
              <div className={styles.divider} />
            </div>
            <div>
              <div className={styles.attribute2} onClick={handleCheckOutClick}>
                <div className={styles.attribute3}>Check out</div>
                <input
                  type="text"
                  className={styles.value1}
                  value={checkOutDate ? checkOutDate.toLocaleDateString() : ""}
                  placeholder="Select date"
                  onClick={() => setShowCheckOutCalendar(true)}
                  readOnly
                />
                {showCheckOutCalendar && (
                  <div className={styles.calendarContainer}>
                    <Calendar
                      onChange={(date: any) => handleCheckOutDateChange(date)}
                      value={checkOutDate}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.searchFilters}>
              <div className={styles.divider} />
            </div>
            
              <div className={styles.iconButtonBase}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              
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
        </div> */}
        <div className="flex justify-center w-[100%]">
          <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
          <NavBar />
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
          {categoryData.length > 0 ? (
            categoryData.map((listing: any) => {
              // Ensure images_url is an array and has a default fallback
              const imageArray = Array.isArray(listing.images_url)
                ? listing.images_url
                : [];
              const firstImage =
                imageArray.length > 0 ? imageArray[0] : "/default-image.png";

              // Ensure listing fields are present
              const {
                id,
                name,
                overallRating_overall,
                lowestPrivatePricePerNight_value,
                facilitiesSummary,
                description,
                price_per_night,
              } = listing;

              return (
                <div
                  key={listing.id} // Ensure 'id' is unique
                  onClick={() => handleListingClick(id)}
                  style={{ width: "100%" }}
                >
                  <Listing1
                    data={listing}
                    image={firstImage}
                    subtitle={name || "No title"}
                    rating={
                      overallRating_overall ? overallRating_overall / 20 : 0
                    }
                    cost={lowestPrivatePricePerNight_value || "N/A"}
                    cityName={cityName}
                    facilities={facilitiesSummary || "No facilities listed"}
                    heart="/heart.svg"
                    guestsEntireHome5Beds={
                      description || "No description available"
                    }
                    star="/star.svg"
                    reviewSummary={`$${price_per_night || "0"}`}
                  />

                  <div className={styles.divider4} />
                </div>
              );
            })
          ) : (
            <p>No listings available.</p>
          )}
        </div>
        <div className={styles.left1}>
          <MapComponent hotels={hotels} />
        </div>
      </section>
    </div>
  );
};

export default StandardSearch;
