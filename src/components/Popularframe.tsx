import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./Popularframe.module.css";

export type PopularframeType = {
  className?: string;
};

const Popularframe: FunctionComponent<PopularframeType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.tourHeaderWrapper, className].join(" ")}>
      <div className={styles.tourHeader}>
        <a
          className={styles.travelCategory}
          href="http://preview.themeforest.net/item/arid-travel-tourism-booking-wordpress-theme/full_screen_preview/50544361?_ga=2.231491615.1266853065.1721277462-410508713.1703566899"
          target="_blank"
        >
          Travel Category
        </a>
        <div className={styles.filter}>
          <div className={styles.date}>
            <div className={styles.dateRange}>
              <div className={styles.dateRangeChild} />
              <div className={styles.dateInput}>
                <div className={styles.datePicker}>
                  <div className={styles.location}>
                    <div className={styles.locationInput}>
                      <div className={styles.whereDoYouContainer}>
                        <span className={styles.span}>{`  `}</span>
                        <span className={styles.whereDoYou}>
                          Where do you want to go?
                        </span>
                      </div>
                      <div className={styles.locationIcon}>
                        <div className={styles.locationBackground} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.dateFields}>
                    <div className={styles.dateValues} />
                  </div>
                  <div className={styles.dateFields1}>
                    <div className={styles.checkInParent}>
                      <div className={styles.checkIn}>
                        <div className={styles.checkDates}>
                          <div className={styles.div}>{` `}</div>
                        </div>
                        <div className={styles.checkInOut}>
                          <div className={styles.checkIn1}>Check in</div>
                          <div className={styles.selectedDates}>
                            <div className={styles.jul}>20 jul</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.dateBackgrounds} />
                    </div>
                  </div>
                  <div className={styles.dateFields2}>
                    <div className={styles.dateFieldsChild} />
                  </div>
                  <div className={styles.dateFields3}>
                    <div className={styles.frameParent}>
                      <div className={styles.frameGroup}>
                        <div className={styles.wrapper}>
                          <div className={styles.div1}>{` `}</div>
                        </div>
                        <div className={styles.checkOutParent}>
                          <div className={styles.checkOut}>Check Out</div>
                          <div className={styles.julWrapper}>
                            <div className={styles.jul1}>28 jul</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameChild} />
                    </div>
                  </div>
                  <div className={styles.dateFields4}>
                    <div className={styles.dateFieldsItem} />
                  </div>
                  <div className={styles.dateFields5}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.frameDiv}>
                          <div className={styles.usersWrapper}>
                            <div className={styles.users}>users</div>
                          </div>
                          <div className={styles.guest}>
                            <div className={styles.guest1}>Guest</div>
                            <div className={styles.guestDropdown}>
                              <div className={styles.guestIcon}>05</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.searchButton}>
                <div className={styles.searchButtonChild} />
                <div className={styles.submit}>
                  <span className={styles.submit1}>Submit</span>
                  <span className={styles.span1}> </span>
                </div>
              </button>
            </div>
          </div>
          <h1 className={styles.ourPopularTours}>Our Popular Tours Type</h1>
          <div className={styles.tourFeatures}>
            <GroupComponent
              rectangle14="/rectangle-14@2x.png"
              viewTravellerProfiles="View Traveller Profiles"
            />
            <GroupComponent
              rectangle14="/rectangle-141@2x.png"
              viewTravellerProfiles="Join your hostel's Chat"
              propBackgroundImage="url('/rectangle-141@2x.png')"
            />
            <GroupComponent
              rectangle14="/rectangle-142@2x.png"
              viewTravellerProfiles="View Traveller Profiles"
              propBackgroundImage="url('/rectangle-142@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popularframe;
