import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Listing from "./Listing";
import styles from "./searchpage.module.css";


export type SearchType = {
  className?: string;
};

const Search: FunctionComponent<SearchType> = ({ className = "" }) => {
  const navigate = useNavigate();

  // const onListingContainerClick = useCallback(() => {
  //   navigate("/listing");
  // }, [navigate]);


  return (
    <div className={[styles.Search, className].join(" ")}>
      <div className={styles.left}>
        <div className={styles.staysInBordeaux}>200+ stays in Bordeaux</div>
        <div className={styles.divider} />
        <Listing
          image="/image2@2x.png"
          subtitle="Zostel Kormangla"
          heart="/heart1.svg"
          guestsEntireHome5Beds="10+People already there with you"
          listingSecondaryReviewSep="$325"
          onListingContainerClick={onListingContainerClick}
        />
        <div className={styles.divider1} />
        <Listing
          image="/image-11@2x.png"
          subtitle="Drapers Startup House"
          heart="/heart-1.svg"
          guestsEntireHome5Beds="4-6 guests · Entire Home · 5 beds · 3 bath"
          listingSecondaryReviewSep="$200"
        />
        <div className={styles.divider2} />
        <Listing
          image="/image-21@2x.png"
          subtitle="Historic City Center Home"
          heart="/heart1.svg"
          guestsEntireHome5Beds="4-6 guests · Entire Home · 5 beds · 3 bath"
          listingSecondaryReviewSep="$125"
        />
      </div>
      <div className={styles.mapParent}>
        <div className={styles.map}>
          <img className={styles.mapIcon} alt="" src="/map1@2x.png" />
          <div className={styles.iconButtonBase}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon-15.svg"
            />
          </div>
          <div className={styles.actions}>
            <div className={styles.iconButton}>
              <div className={styles.iconButtonBase1}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon-16.svg"
                />
              </div>
            </div>
            <div className={styles.iconButton1}>
              <div className={styles.iconButtonBase2}>
                <img
                  className={styles.icon2}
                  loading="lazy"
                  alt=""
                  src="/icon-17.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.checkboxToggleWrapper}>
          <div className={styles.checkboxToggle}>
            <div className={styles.checkbox}>
              <img
                className={styles.icon3}
                loading="lazy"
                alt=""
                src="/icon-31.svg"
              />
            </div>
            <div className={styles.label}>Search as I move the map</div>
          </div>
        </div>
        <div className={styles.listings}>
          <div className={styles.filterDropdownContainerParent}>
            <div className={styles.filterDropdownContainer}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <img className={styles.icon4} alt="" src="/icon.svg" />
                  <div className={styles.text}>$110</div>
                  <img className={styles.icon5} alt="" src="/icon2.svg" />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <div className={styles.button1}>
                  <div className={styles.buttonBase1}>
                    <img className={styles.icon6} alt="" src="/icon.svg" />
                    <div className={styles.text1}>$150</div>
                    <img className={styles.icon7} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.filterOptionsWrapper}>
              <div className={styles.filterOptions}>
                <div className={styles.buttonContainer}>
                  <div className={styles.button2}>
                    <div className={styles.buttonBase2}>
                      <img className={styles.icon8} alt="" src="/icon.svg" />
                      <div className={styles.text2}>$500</div>
                      <img className={styles.icon9} alt="" src="/icon2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.buttonBase3}>
                    <img className={styles.icon10} alt="" src="/icon.svg" />
                    <div className={styles.text3}>$275</div>
                    <img className={styles.icon11} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.filterDropdownWrapper}>
              <div className={styles.filterDropdown}>
                <div className={styles.buttonFrame}>
                  <div className={styles.button4}>
                    <div className={styles.buttonBase4}>
                      <img className={styles.icon12} alt="" src="/icon.svg" />
                      <div className={styles.text4}>$190</div>
                      <img className={styles.icon13} alt="" src="/icon2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonParent}>
                  <div className={styles.button5}>
                    <div className={styles.buttonBase5}>
                      <img className={styles.icon14} alt="" src="/icon.svg" />
                      <div className={styles.text5}>$350</div>
                      <img className={styles.icon15} alt="" src="/icon2.svg" />
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.button6}>
                      <div className={styles.buttonBase6}>
                        <img className={styles.icon16} alt="" src="/icon.svg" />
                        <div className={styles.text6}>$200</div>
                        <img
                          className={styles.icon17}
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button7}>
                  <div className={styles.buttonBase7}>
                    <img className={styles.icon18} alt="" src="/icon.svg" />
                    <div className={styles.text7}>$140</div>
                    <img className={styles.icon19} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listingsInner}>
            <div className={styles.frameParent}>
              <div className={styles.buttonWrapper1}>
                <div className={styles.button8}>
                  <div className={styles.buttonBase8}>
                    <img className={styles.icon20} alt="" src="/icon.svg" />
                    <div className={styles.text8}>$95</div>
                    <img className={styles.icon21} alt="" src="/icon2.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.button9}>
                <div className={styles.buttonBase9}>
                  <img className={styles.icon22} alt="" src="/icon.svg" />
                  <div className={styles.text9}>$325</div>
                  <img className={styles.icon23} alt="" src="/icon2.svg" />
                </div>
              </div>
              <div className={styles.filterDropdownSecondItemCoWrapper}>
                <div className={styles.filterDropdownSecondItemCo}>
                  <div className={styles.buttonWrapper2}>
                    <div className={styles.button10}>
                      <div className={styles.buttonBase10}>
                        <img className={styles.icon24} alt="" src="/icon.svg" />
                        <div className={styles.text10}>$200</div>
                        <img
                          className={styles.icon25}
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.button11}>
                    <div className={styles.buttonBase11}>
                      <img className={styles.icon26} alt="" src="/icon.svg" />
                      <div className={styles.text11}>$125</div>
                      <img className={styles.icon27} alt="" src="/icon2.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
