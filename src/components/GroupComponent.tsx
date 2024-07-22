import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  rectangle14?: string;
  viewTravellerProfiles?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  rectangle14,
  viewTravellerProfiles,
  propBackgroundImage,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <img className={styles.frameChild} alt="" src={rectangle14} />
      <div className={styles.features}>
        <h2 className={styles.viewTravellerProfiles}>
          {viewTravellerProfiles}
        </h2>
        <div className={styles.featuresChild} />
        <div className={styles.featurePreviews}>
          <h2 className={styles.seeWhosGoing}>See who's going!</h2>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
