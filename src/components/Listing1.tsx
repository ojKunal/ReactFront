import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Listing.module.css";

export type Listing1Type = {
  className?: string;
  image?: string;
  subtitle?: string;
  heart?: string;
  guestsEntireHome5Beds?: string;
  star?: string;
  reviewSummary?: string;

  /** Action props */
  onListingContainerClick?: () => void;
};

const Listing1: FunctionComponent<Listing1Type> = ({
  className = "",
  image,
  subtitle,
  heart,
  guestsEntireHome5Beds,
  star,
  reviewSummary,
}) => {
  const navigate = useNavigate();

  // const onListingContainerClick1 = useCallback(() => {
  //   navigate("/listing");
  // }, [navigate]);

  return (
    <div
      className={[styles.listing, className].join(" ")}
      onClick={() => navigate("/listing")}
      style={{ overflow: "hidden" }}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSubtitle}>
            <div className={styles.title}>Entire home in Bordeaux</div>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
          <img className={styles.heartIcon} loading="lazy" alt="" src={heart} />
        </div>
        <div className={styles.divider} />
        <div className={styles.details}>
          <div className={styles.guestsEntire}>{guestsEntireHome5Beds}</div>
          <div className={styles.wifiKitchen}>Wifi · Kitchen · Free Parking</div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.footer}>
          <div className={styles.review}>
            <div className={styles.averageRating}>5.0</div>
            <img className={styles.starIcon} loading="lazy" alt="" src={star} />
            <div className={styles.reviews}>(318 reviews)</div>
          </div>
          <div className={styles.review1}>
            <div className={styles.reviewSummary}>{reviewSummary}</div>
            <div className={styles.nightWrapper}>
              <div className={styles.night}>/night</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing1;
