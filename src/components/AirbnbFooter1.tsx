import { FunctionComponent } from "react";
import styles from "./AirbnbFooter1.module.css";

export type AirbnbFooter1Type = {
  className?: string;
};

const AirbnbFooter1: FunctionComponent<AirbnbFooter1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.airbnbFooter, className].join(" ")}>
      <h2 className={styles.exploreOtherOptions}>
        Explore other options in France
      </h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.paris}>Paris</div>
          <div className={styles.lille}>Lille</div>
          <div className={styles.toulouse}>Toulouse</div>
        </div>
        <div className={styles.column1}>
          <div className={styles.nice}>Nice</div>
          <div className={styles.aixEnProvence}>Aix-en-Provence</div>
          <div className={styles.montpellier}>Montpellier</div>
        </div>
        <div className={styles.column2}>
          <div className={styles.lyon}>Lyon</div>
          <div className={styles.rouen}>Rouen</div>
          <div className={styles.dijon}>Dijon</div>
        </div>
        <div className={styles.column3}>
          <div className={styles.marseille}>Marseille</div>
          <div className={styles.amiens}>Amiens</div>
          <div className={styles.grenoble}>Grenoble</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.uniqueStaysOn}>Unique stays on Airbnb</div>
        <div className={styles.columns1}>
          <div className={styles.column4}>
            <div className={styles.beachHouseRentals}>Beach House Rentals</div>
            <div className={styles.cabinRentals}>Cabin Rentals</div>
          </div>
          <div className={styles.column5}>
            <div className={styles.camperRentals}>Camper Rentals</div>
            <div className={styles.tinyHouseRentals}>Tiny House Rentals</div>
          </div>
          <div className={styles.column6}>
            <div className={styles.glampingRentals}>Glamping Rentals</div>
            <div className={styles.lakehouseRentals}>Lakehouse Rentals</div>
          </div>
          <div className={styles.column7}>
            <div className={styles.treehouseRentals}>Treehouse Rentals</div>
            <div className={styles.mountainChaletRentals}>
              Mountain Chalet Rentals
            </div>
          </div>
        </div>
      </div>
      <div className={styles.breadcrumb}>
        <div className={styles.page}>Airbnb</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright-8.svg"
        />
        <div className={styles.page1}>Europe</div>
        <img
          className={styles.chevronRightIcon1}
          alt=""
          src="/chevronright-8.svg"
        />
        <div className={styles.page2}>France</div>
        <img
          className={styles.chevronRightIcon2}
          alt=""
          src="/chevronright-8.svg"
        />
        <div className={styles.page3}>Bordeaux</div>
      </div>
    </div>
  );
};

export default AirbnbFooter1;
