import { FunctionComponent, useCallback, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing1 from "../components/Listing1";
// import FrameComponent1 from "./FrameComponent1";
import styles from "./StandardSearch.module.css";
import { supabase } from "../Utils/SupabaseConfig";

export type StandardSearchType = {
  className?: string;
};

const StandardSearch: FunctionComponent<StandardSearchType> = ({
  className = "",
}) => {

  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<any>()

  useEffect(() => {
    getfacilitiesData();
  }, []);

  const getfacilitiesData = async () => {
    const id = 102145;
    const { data, error } = await supabase
      .from('Hostelv2')
      .select(`name, overview, images_url, city_name, address1, address2, city_country, distance_value, distance_units,
        facilitiesSummary, hbid, latitude, longitude, lowestDormPricePerNight_value, lowestPrivatePricePerNight_value,
        overallRating_numberOfRatings, overallRating_overall, ratingBreakdown_average, ratingBreakdown_clean,
        ratingBreakdown_facilities, ratingBreakdown_fun, ratingBreakdown_location, ratingBreakdown_security,
        ratingBreakdown_staff, ratingBreakdown_value`
        )
      .eq('id', id);
  
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setCategoryData(data);
      console.log("data is", data);
      setCategoryData(data);
    }
  };
//  console.log(categoryData);



  return (
    <div
      className={[styles.standardSearch, className].join(" ")}
    >
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
                <a className={styles.value}>Bangalore</a>
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
            <div className={styles.searchFilters3}>
              <div className={styles.attribute4}>
                <div className={styles.attribute5}>Guests</div>
                <a className={styles.value2}>2 guests</a>
              </div>
            </div>
            <div className={styles.iconButton}>
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
                <a className={styles.text4}>Soical</a>
                <img className={styles.icon10} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.buttonBase5}>
                <img className={styles.icon11} alt="" src="/icon.svg" />
                <a className={styles.text5}>Workstation</a>
                <img className={styles.icon12} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.button6}>
              <div className={styles.buttonBase6}>
                <img className={styles.icon13} alt="" src="/icon.svg" />
                <div className={styles.text6}>Trekking</div>
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
      <section className={styles.example}
      style={{ overflow: "hidden" }}>
        <div className={styles.left1}
        >
          
          <div className={styles.staysInBordeaux}>200+ stays in Bordeaux</div>
          <div className={styles.divider3} />
          <Listing1
            image="/image@2x.png"
            subtitle="Zostel Kormangla"
            heart="/heart.svg"
            guestsEntireHome5Beds="10+People already there with you"
            star="/star.svg"
            reviewSummary="$325"
          />
          <div className={styles.divider4} />
          <Listing1
            image="/image-1@2x.png"
            subtitle="Drapers Startup House"
            heart="/heart.svg"
            guestsEntireHome5Beds="4-6 guests · Entire Home · 5 beds · 3 bath"
            star="/star.svg"
            reviewSummary="$200"
          />
          <div className={styles.divider5} />
          <Listing1
            image="/image-2@2x.png"
            subtitle="Historic City Center Home"
            heart="/heart.svg"
            guestsEntireHome5Beds="4-6 guests · Entire Home · 5 beds · 3 bath"
            star="/star.svg"
            reviewSummary="$125"
          />
        </div>
        {/* <FrameComponent1
          map="/map@2x.png"
          icon="/icon-4.svg"
          icon1="/icon-5.svg"
          icon2="/icon-6.svg"
          icon3="/icon-7.svg"
          icon4="/icon.svg"
          icon5="/icon.svg"
          icon6="/icon.svg"
          icon7="/icon.svg"
          icon8="/icon.svg"
          icon9="/icon.svg"
          icon10="/icon.svg"
          icon11="/icon.svg"
          icon12="/icon.svg"
          icon13="/icon.svg"
          icon14="/icon.svg"
          icon15="/icon.svg"
          icon16="/icon.svg"
          icon17="/icon.svg"
          icon18="/icon.svg"
          icon19="/icon.svg"
          icon20="/icon.svg"
          icon21="/icon.svg"
          icon22="/icon.svg"
          icon23="/icon.svg"
          icon24="/icon.svg"
          icon25="/icon.svg"
          icon26="/icon.svg"
          icon27="/icon.svg"
        /> */}
      </section>
    </div>
  );
};
export default StandardSearch;
