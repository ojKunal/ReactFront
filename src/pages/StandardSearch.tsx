import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing1 from "../components/Listing1";
import styles from "./StandardSearch.module.css";
import { supabase } from "../Utils/SupabaseConfig";
import { IoLocationOutline } from "react-icons/io5";

export type StandardSearchType = {
  className?: string;
};

const StandardSearch: FunctionComponent<StandardSearchType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [cityName, setCityName] = useState<string>("goa");
  const [limit, setLimit] = useState<number>(10);
  const [inputValue, setInputValue] = useState<string>(""); // State to manage input value
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]); // State to store city suggestions
  const [noSuggestions, setNoSuggestions] = useState<boolean>(false); // State to track if no suggestions found
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to track loading more data
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0); // State to manage active suggestion index
  const [showSuggestions, setShowSuggestions] = useState(false); // State to show suggestions

  const fetchListing = async () => {
    setIsLoading(true);

    let query = supabase
      .from("Hostelv2")
      .select("*")
      .limit(limit)
      .eq("isactiveonHW", true)
      .ilike("city_name", `%${cityName}%`);

    const { data, error } = await query;

    if (error) {
      console.error(error);
    } else {
      setCategoryData(data);
      console.log("my data", data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchListing();
  }, [cityName,limit]);

  const fetchCitySuggestions = async (searchTerm: string) => {
    const { data, error } = await supabase
      .from("Hostelv2")
      .select("city_name")
      .ilike("city_name", `%${searchTerm}%`)
      .limit(10);

    if (error) {
      console.error(error);
    } else {
      // Extract unique city names from the data
      const uniqueCities = [
        ...new Set((data || []).map((item: any) => item.city_name)),
      ];
      setCitySuggestions(uniqueCities);
      setNoSuggestions(uniqueCities.length === 0);
    }
  };

  

  useEffect(() => {
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

  // useEffect(() => {
  //   fetchListing();
  // }, [limit]);

  useEffect(() => {
    if (inputValue) {
      fetchCitySuggestions(inputValue);
    } else {
      setCitySuggestions([]);
      setNoSuggestions(false);
    }
  }, [inputValue]);

  if (!categoryData.length && !isLoading) {
    return <div>Loading...</div>;
  }

  const handleChange = (e: any) => {
    setInputValue(e.target.value); // Update input value state
    setShowSuggestions(true); // Show suggestions when input changes
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowDown") {
      if (activeSuggestionIndex < citySuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "Enter") {
      setInputValue(citySuggestions[activeSuggestionIndex]);
      setCityName(citySuggestions[activeSuggestionIndex]);
      setShowSuggestions(false);
      setActiveSuggestionIndex(0);
    }
  };

  const handleClick = (index: number) => {
    setInputValue(citySuggestions[index]);
    setCityName(citySuggestions[index]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(0);
  };

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
          <div className={styles.airbnbSearch}>
            <div className={styles.attributeList}>
              <div className={styles.attribute}>
                <div className={styles.attribute1}>Location</div>

                <input
                  className={styles.value}
                  type="text"
                  value={inputValue} // Controlled input
                  onKeyDown={handleKeyDown}
                  onChange={handleChange} // Handle change to update input value
                  spellCheck={false}
                  style={{ border: "0px solid", outline: "none" }}
                  placeholder="Search City"
                  list="citySuggestions"
                />
                {inputValue && showSuggestions && (
                  <div className={styles.suggestionBox}>
                    <div id="citySuggestions">
                      {citySuggestions.length > 0 ? (
                        citySuggestions.map((city, index) => (
                          <div className={`${styles.suggestionItem} ${
                            index === activeSuggestionIndex
                              ? styles.active
                              : ""
                          }`}>
                            <IoLocationOutline size={20}/>
                            <div
                              key={index}
                              
                              onClick={() => handleClick(index)}
                            >
                              {city}
                            </div>
                          </div>
                        ))
                      ) : noSuggestions ? (
                        <div className={styles.suggestionItem}>
                          No place found with this name
                        </div>
                      ) : null}
                    </div>
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
            <div className={styles.button2}>
              <div className={styles.buttonBase2}>
                <img className={styles.icon5} alt="" src="/icon.svg" />
                <div className={styles.text2}>Party hostels</div>
                <img className={styles.icon6} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button3}>
              <div className={styles.buttonBase3}>
                <img className={styles.icon7} alt="" src="/icon.svg" />
                <div className={styles.text3}>Peaceful Hostels</div>
                <img className={styles.icon8} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.buttonBase4}>
                <img className={styles.icon9} alt="" src="/icon.svg" />
                <a className={styles.text4}>Social</a>
                <img className={styles.icon10} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.buttonBase5}>
                <img className={styles.icon11} alt="" src="/icon.svg" />
                <div className={styles.text5}>Remote</div>
                <img className={styles.icon12} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button6}>
              <div className={styles.buttonBase6}>
                <img className={styles.icon13} alt="" src="/icon.svg" />
                <div className={styles.text6}>Free wifi</div>
                <img className={styles.icon14} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.buttonBase7}>
                <img className={styles.icon15} alt="" src="/icon.svg" />
                <div className={styles.text7}>Hiking</div>
                <img className={styles.icon16} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.buttonBase8}>
                <img className={styles.icon17} alt="" src="/icon.svg" />
                <div className={styles.text8}>Free parking</div>
                <img className={styles.icon18} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.buttonBase9}>
                <img className={styles.icon19} alt="" src="/icon.svg" />
                <div className={styles.text9}>Dryer</div>
                <img className={styles.icon20} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button10}>
              <div className={styles.buttonBase10}>
                <img
                  className={styles.icon21}
                  loading="lazy"
                  alt=""
                  src="/icon-3.svg"
                />
                <a className={styles.text10}>Filters</a>
                <img className={styles.icon22} alt="" src="/icon.svg" />
              </div>
            </div>
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
            console.log("link is", listing.images_url);
            const imageArray = listing.images_url;
            const firstImage =
              imageArray.length > 0 ? imageArray[0] : "/default-image.png";
            console.log(firstImage);
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

          {isLoading && <div>Loading more...</div>}
        </div>
      </section>
    </div>
  );
};

export default StandardSearch;
