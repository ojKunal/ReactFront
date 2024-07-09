import { FunctionComponent } from "react";
import styles from "./AirbnbComment.module.css";

export type AirbnbCommentType = {
  className?: string;
  avatar?: string;
  title?: string;
  subtitle?: string;
  comment?: string;
};

const AirbnbComment: FunctionComponent<AirbnbCommentType> = ({
  className = "",
  avatar,
  title,
  subtitle,
  comment,
}) => {
  return (
    <div className={[styles.airbnbComment, className].join(" ")}>
      <div className={styles.user}>
        <img className={styles.avatarIcon} loading="lazy" alt="" src={avatar} />
        <div className={styles.titleSubtitle}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
      <div className={styles.comment}>{comment}</div>
    </div>
  );
};

export default AirbnbComment;
