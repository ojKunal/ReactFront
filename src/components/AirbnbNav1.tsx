import { FunctionComponent } from "react";
import styles from "./AirbnbNav1.module.css";

export type AirbnbNav1Type = {
  className?: string;
};

const AirbnbNav1: FunctionComponent<AirbnbNav1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.airbnbNav, className].join(" ")}>
      <div className={styles.nav}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div className={styles.airbnbSearch}>
        <div className={styles.searchFilters}>
          <div className={styles.attribute}>
            <div className={styles.attribute1}>Location</div>
            <a className={styles.value}>Bangalore</a>
          </div>
        </div>
        <div className={styles.searchFilters1}>
          <div className={styles.divider} />
        </div>
        <div className={styles.searchFilters2}>
          <div className={styles.attribute2}>
            <div className={styles.attribute3}>Check in</div>
            <a className={styles.value1}>Feb 19-26</a>
          </div>
        </div>
        <div className={styles.searchFilters3}>
          <div className={styles.divider1} />
        </div>
        <div className={styles.searchFilters4}>
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
          <a className={styles.title}>Join Travel Group</a>
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
  );
};

export default AirbnbNav1;
