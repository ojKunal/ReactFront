import { FunctionComponent } from "react";
import styles from "./AirbnbNav.module.css";

export type AirbnbNavType = {
  className?: string;
};

const AirbnbNav: FunctionComponent<AirbnbNavType> = ({ className = "" }) => {
  return (
    <header className={[styles.airbnbNav, className].join(" ")}>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.airbnbSearch}>
        <div className={styles.attribute}>
          <div className={styles.attribute1}>Location</div>
          <div className={styles.value}>Start your search</div>
        </div>
        <div className={styles.iconButton}>
          <div className={styles.iconButtonBase}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Become a Host</div>
        <img className={styles.globeIcon} alt="" src="/globe.svg" />
        <div className={styles.profileDropdown}>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
    </header>
  );
};

export default AirbnbNav;
