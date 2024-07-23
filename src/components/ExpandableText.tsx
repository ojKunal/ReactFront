import { useState, FunctionComponent } from "react";
// import styles from "./ExpandableText.module.css"; // Create a CSS module for styling
import styles from "./HostDetails.module.css";
interface ExpandableTextProps {
  text: string;
  limit?: number;
}

const ExpandableText: FunctionComponent<ExpandableTextProps> = ({
  text,
  limit = 250,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const isTextLong = text.length > limit;
  const displayedText = isExpanded ? text : text.slice(0, limit);

  return (
    <div className={styles.listingDescription}>
      <div className={styles.comeAndStayContainer}>
        <p>
          {displayedText}
          {!isExpanded && isTextLong ? "..." : ""}
        </p>
      </div>
      {isTextLong && (
        <div
          className={styles.iconText}
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.readMoreLabel}>
            {isExpanded ? "Show less" : "Show more"}
          </div>
          <div className={styles.readMoreChevron}>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
