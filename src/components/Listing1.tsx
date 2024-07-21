import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Listing.module.css";

export type Listing1Type = {
  data?: any;
  className?: string;
  image?: string;
  subtitle?: string;
  heart?: string;
  guestsEntireHome5Beds?: string;
  star?: string;
  reviewSummary?: string;
  rating?: number;
  cost?: number;
  facilities?: any;
  cityName?: string;

  /** Action props */
  onListingContainerClick?: () => void;
};

const Listing1: FunctionComponent<Listing1Type> = ({
  data,
  className = "",
  image,
  subtitle,
  heart,
  guestsEntireHome5Beds,
  star,
  reviewSummary,
  rating,
  cost,
  facilities,
  cityName,
}) => {
  const navigate = useNavigate();
  const [isHeartRed, setIsHeartRed] = useState(false);

  const facilities1 = JSON.parse(facilities);

  console.log("my data is here", data);

  return (
    <div
      className={[styles.listing, className].join(" ")}
      style={{ overflow: "hidden", cursor: "default" }}
    >
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        onClick={() => navigate("/listing", { state: { data } })}
        style={{
          transition: "transform 0.15s ease-in-out, opacity 0.15s ease-in-out",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "1";
        }}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSubtitle}>
            <div className={styles.title}>Entire home in {cityName}</div>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
          <img
            className={styles.heartIcon}
            loading="lazy"
            alt=""
            src={heart}
            style={{
              cursor: "pointer",
              filter: isHeartRed ? " brightness(0) saturate(100%) invert(22%) sepia(100%) saturate(4698%) hue-rotate(347deg) brightness(101%) contrast(106%)" : "none",
              transition: "filter 0.15s ease-in-out",
            }}
            onClick={() => setIsHeartRed(!isHeartRed)}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles.details}>
          <div className={styles.guestsEntire}>{guestsEntireHome5Beds}</div>
          <div className={styles.wifiKitchen}>
            {facilities1[0]} . {facilities1[1]} . {facilities1[2]}
          </div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.footer}>
          <div className={styles.review}>
            <div className={styles.star}>{rating}.0</div>
            <img className={styles.starIcon} loading="lazy" alt="" src={star} />
            <div className={styles.reviews}>(318 reviews)</div>
          </div>
          <div className={styles.review1} style={{ marginLeft: 0 }}>
            <div className={styles.reviewSummary}>₹{cost}</div>
            <div className={styles.nightWrapper}>
              <div className={styles.night} style={{}}>
                night
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing1;
