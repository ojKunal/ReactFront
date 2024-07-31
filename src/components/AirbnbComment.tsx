import { FunctionComponent } from "react";
import ExpandableText from "./ExpandableText"; // Import the new component
import styles from "./AirbnbComment.module.css";

export type AirbnbCommentType = {
  className?: string;
  reviews?: any;
  length?: number;
  avatar?: string;
  title?: string;
  subtitle?: string;
  comment?: string;
};

const AirbnbComment: FunctionComponent<AirbnbCommentType> = ({
  className = "",
  reviews,
  length,
  avatar,
  title,
  subtitle,
  comment,
}) => {
  return (
    <div className={[styles.airbnbComment, className].join(" ")}>
      {reviews && reviews.slice(0, length).map((review: any, index: number) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <div className={styles.user}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt={review.user_nickname}
              src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${review.user_nickname}&radius=50&size=32`}
            />
            <div className={styles.titleSubtitle}>
              <div className={styles.title}>{review.user_nickname}</div>
              <div className={styles.subtitle}>
                {review.ratingCreated.split("T")[0]}
              </div>
            </div>
          </div>
          <div className={styles.comment} style={{ marginTop: 20 }}>
            <ExpandableText text={review.ratingDescription} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirbnbComment;
