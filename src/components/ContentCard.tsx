import { FunctionComponent } from "react";
import styles from "./ContentCard.module.css";

export type ContentCardType = {
  className?: string;
};

const ContentCard: FunctionComponent<ContentCardType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.hostelContent, className].join(" ")}>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-27.svg"
        />
        <img
          className={styles.hostelImageIcon}
          alt=""
          src="/hostel-image@2x.png"
        />
        <div className={styles.withOver16500}>
          With over 16,500 hostels in 180 countries, there’s always room for a
          new adventure!
        </div>
        <h1 className={styles.theWorldsBestContainer}>
          <span className={styles.theWorldsBestContainer1}>
            <span>The world’s</span>
            <span className={styles.bestHostels}> best hostels</span>
            <span>, with over</span>
            <span className={styles.millionReviews}> 13 million reviews</span>
            <span>.</span>
          </span>
        </h1>
        <div className={styles.hostelIndicators}>
          <img
            className={styles.hostelIndicatorsIcon}
            alt=""
            src="/hostel-indicators@2x.png"
          />
          <img
            className={styles.hostelIndicatorsIcon1}
            loading="lazy"
            alt=""
            src="/rectangle-28@2x.png"
          />
          <img
            className={styles.hostelIndicatorsIcon2}
            alt=""
            src="/hostel-indicators1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
