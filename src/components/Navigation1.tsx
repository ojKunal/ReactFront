import { FunctionComponent } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.wrapper}>
                <div className={styles.div}></div>
              </div>
              <div className={styles.searchDestinationsOrActivitWrapper}>
                <div className={styles.searchDestinationsOr}>
                  Search destinations or activities
                </div>
              </div>
            </div>
          </div>
          <div className={styles.saleBanner}>
            <div className={styles.monsoonSaleSaveContainer}>
              <span className={styles.monsoonSaleSaveContainer1}>
                <b>Monsoon Sale</b>
                <span className={styles.saveUpto}>{` Save Upto `}</span>
                <b>70% Off</b>
                <span className={styles.onYourTrip}> On your trip</span>
              </span>
            </div>
          </div>
          <div className={styles.user}>
            <img
              className={styles.userChild}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className={styles.currency}>
            <div className={styles.currencyDropdown}>
              <a className={styles.inr}>INR ₹</a>
              <div className={styles.div1}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentBackground} />
        <div className={styles.main}>
          <div className={styles.explore}>
            <div className={styles.exploreImage}>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className={styles.exploreOptions}>
              <div className={styles.categories}>
                <div className={styles.exploreButton}>
                  <div className={styles.exploreDestinations}>
                    <span>
                      <span>
                        <span></span>
                        <span className={styles.span}>{` `}</span>
                      </span>
                      <span className={styles.exploreDestinations1}>
                        Explore destinations
                      </span>
                    </span>
                  </div>
                </div>
                <div className={styles.allCategories}>All categories</div>
                <nav className={styles.categoryList}>
                  <div className={styles.attractionTickets}>
                    Attraction tickets
                  </div>
                  <div className={styles.hotels}>Hotels</div>
                  <div className={styles.transport}>Transport</div>
                </nav>
              </div>
            </div>
            <div className={styles.login}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.login1}>
                  <span>
                    <span className={styles.span1}>{` `}</span>
                    <b className={styles.login2}>Login</b>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
