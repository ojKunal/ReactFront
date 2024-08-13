import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/StandardSearch.module.css";
import Calendar from "react-calendar";
import { supabase } from "../Utils/SupabaseConfig";
import { useLocation } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import DateRangePickerComponent from "./DateRangePeaker";

export const NavBar: FunctionComponent = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<any>([]);
  const [cityName, setCityName] = useState<string>(""); // Removed default value
  const [limit, setLimit] = useState<number>(10);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState<boolean>(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState<number>(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const filterByCity = ""; // Example: 'Bangalore'
  const filterByFacility = ""; // Looking for 'wifi' in facilities_Summary
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  //   const fetchListing = async () => {
  //     let query = supabase
  //       .from("Hostelv2")
  //       .select("*")
  //       .limit(limit)
  //       .eq("isactiveonHW", true);

  //     // Apply filters conditionally
  //     if (filterByCity) {
  //       query = query.ilike("city_name", `%${cityName}%`);
  //     }
  //     if (filterByFacility) {
  //       query = query.contains("facilitiesSummary", [filterByFacility]);
  //     }
  //     if (selectedCategories.length > 0) {
  //       try {
  //         const jsonCategories = JSON.stringify(selectedCategories);
  //         query = query.containedBy("category", jsonCategories);
  //         console.log("jsoncategories", jsonCategories);
  //       } catch (error) {
  //         console.error("Failed to convert categories to JSON:", error);
  //       }
  //     }

  //     const { data, error } = await query;

  //     if (error) {
  //       console.error(error);
  //     } else {
  //       setCategoryData(data);
  //       console.log("my data", data);
  //     }
  //   };

  const fetchSuggestions = async (input: string) => {
    const { data, error } = await supabase
      .from("Hostelv2")
      .select("city_name")
      .ilike("city_name", `%${input}%`)
      .limit(5);

    if (error) {
      console.error("Error fetching suggestions:", error);
    } else {
      const uniqueSuggestions = Array.from(
        new Set(data.map((item: any) => item.city_name))
      );
      setSuggestions(uniqueSuggestions);
    }
  };

  //   useEffect(() => {
  //     // Fetch data when component mounts and when filters or limit changes
  //     fetchListing();
  //   }, [cityName, limit, selectedCategories]);
  useEffect(() => {
    // Load recent searches from local storage when the component mounts
    const storedRecentSearches = localStorage.getItem("recentSearches");
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches));
    }
  }, []);
  useEffect(() => {
    // Save recent searches to local storage
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    // if (recentSearches.length < 1) {
    //   setShowRecentSearches(false);
    // }
  }, [recentSearches]);

  useEffect(() => {
    if (inputValue) {
      fetchSuggestions(inputValue);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleChange = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.currentTarget.value;
    setInputValue(value);

    if (value === "") {
      // Show recent searches when input is cleared
      setShowRecentSearches(true);
      setShowSuggestions(false); // Hide suggestions
    } else {
      setShowRecentSearches(false);
      // Fetch suggestions when input changes
      fetchSuggestions(value);
      setShowSuggestions(true);
    }

    if (e.type === "keydown") {
      const keyEvent = e as React.KeyboardEvent<HTMLInputElement>;
      if (keyEvent.key === "Enter") {
        if (activeSearchIndex >= 0 && showRecentSearches) {
          // Set city name based on selected recent search
          const search = recentSearches[activeSearchIndex];
          setCityName(search);
          setInputValue(search);
          setShowRecentSearches(false);
          setActiveSearchIndex(-1);
        } else if (activeSearchIndex >= 0 && showSuggestions) {
          // Set city name based on selected suggestion
          const suggestion = suggestions[activeSearchIndex];
          setCityName(suggestion);
          setInputValue(suggestion);
          setShowSuggestions(false);
          setActiveSearchIndex(-1);
        } else {
          const newCity = value;
          setCityName(newCity);

          // Add to recent searches if not already present
          if (!recentSearches.includes(newCity)) {
            setRecentSearches((prevSearches) => {
              const updatedSearches = [newCity, ...prevSearches];
              // Keep only the last 10 searches
              return updatedSearches.slice(0, 10);
            });
          }
          setShowRecentSearches(false);
          setShowSuggestions(false);
        }
      } else if (keyEvent.key === "ArrowDown") {
        if (showRecentSearches) {
          setActiveSearchIndex((prevIndex) =>
            prevIndex < recentSearches.length - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (showSuggestions) {
          setActiveSearchIndex((prevIndex) =>
            prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
          );
        }
      } else if (keyEvent.key === "ArrowUp") {
        if (showRecentSearches) {
          setActiveSearchIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        } else if (showSuggestions) {
          setActiveSearchIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        }
      }
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setCityName(search);
    setInputValue(search);
    setShowRecentSearches(false);
    setActiveSearchIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCityName(suggestion);
    setInputValue(suggestion);
    setShowSuggestions(false);
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
      setShowSuggestions(false);
    }
  };

  const handleCheckInClick = () => {
    // setShowCheckInCalendar(true);
    if (showCheckOutCalendar) {
      setShowCheckOutCalendar(false); // Close check-out calendar if open
    }
    if (showRecentSearches) {
      setShowRecentSearches(false); // Close recent searches if open
    }
  };
  const handleCheckOutClick = () => {
    // setShowCheckOutCalendar(true);
    if (showCheckInCalendar) {
      setShowCheckInCalendar(false); // Close check-in calendar if open
    }
    if (showRecentSearches) {
      setShowRecentSearches(false); // Close recent searches if open
    }
  };
  const handleCelenderShow = () => {
    setShowCheckInCalendar(false);
  };

  const handleCheckInDateChange = (newDate: Date) => {
    setCheckInDate(newDate);
    setShowCheckInCalendar(false); // Close the calendar after selecting a date
  };
  const handleCheckOutDateChange = (newDate: Date) => {
    setCheckOutDate(newDate);
    setShowCheckOutCalendar(false); // Close the calendar after selecting a date
  };

  // Handling Guest selection //
  const increment = (e: any) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const decrement = (e: any) => {
    e.stopPropagation();
    if (count > 0) setCount(count - 1);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (cityName) {
      navigate(`/Search/${cityName}`, {
        state: { cityName },
      });
    }
  }, [cityName, navigate]);

  return (
    <div
      className={styles.airbnbNav}
      style={{ backgroundColor: "white", borderRadius: "1000px" }}
    >
      <div className={styles.airbnbSearch} onBlur={handleBlur}>
        {/* Middle search bar starts */}
        <div className={styles.attributeList}>
          <div className={styles.attribute}>
            {/* <div className={styles.attribute1}>Location</div> */}
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
            {showRecentSearches && recentSearches.length > 0 && !inputValue && (
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
              <div className={styles.recentSearchesBox} onBlur={handleBlur}>
                <div className={styles.recentSearchesHeader}>city</div>
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

        {/* <div className={styles.divinlineFormsmall}>
        <div className={styles.inputnativeInput}>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame3.svg" />
          </div>
          <div className={styles.datesParent}>
            <a className={styles.dates}>Dates</a>
            <div className={styles.aug22}>21 Aug - 22 Aug</div>
          </div>
        </div>
        <div className={styles.divvDividerWrapper}>
          <div className={styles.divvDivider} />
        </div>
        <div className={styles.inputnativeInput1}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div className={styles.guestsParent}>
            <a className={styles.guests}>Guests</a>
            <a className={styles.a}>0</a> 
          </div>
        </div>
      </div> */}
        <DateRangePickerComponent />
        <div
          className={styles.inputnativeInput1}
          style={{
            border: "1px solid gray",
            padding: "6px",
            cursor: "pointer",
            boxShadow: isEditing ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
            transform: isEditing ? "scale(1.1)" : "scale(1)",
            borderRadius:"10px"
          }}
          onClick={() => setIsEditing(true)}
          onKeyPress={handleKeyPress}
          tabIndex={0}
        >
          <div className={styles.frameContainer}>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "6px",
            }}
          >
            {isEditing ? (
              <>
                <button onClick={decrement} className={styles.changeButton}>
                  -
                </button>
                <span style={{ fontSize: "25px" }} className={styles.a}>
                  {count}
                </span>
                <button onClick={increment} className={styles.changeButton}>
                  +
                </button>
              </>
            ) : (
              <>
                <span className={styles.guests}>Guests</span>
                <span className={styles.a} style={{ fontSize: "20px" }}>{count}</span>
              </>
            )}
          </div>
        </div>
        {/* Middle search bar ends */}
        <div className={styles.searchFilters}>
          <div className={styles.divider} />
        </div>
        {/* ........................... */}
        <div className={styles.iconButtonBase}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
