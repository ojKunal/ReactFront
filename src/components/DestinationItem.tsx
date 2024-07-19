import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DestinationItem.module.css";

export type DestinationItemType = {
  className?: string;
  group22?: string;
  dubai?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const DestinationItem: FunctionComponent<DestinationItemType> = ({
  className = "",
  group22,
  dubai,
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const destinationItemStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={[styles.destinationItem, className].join(" ")}
      style={destinationItemStyle}
    >
      <div className={styles.destinationCity}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src={group22} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <h3 className={styles.dubai}>{dubai}</h3>
          </div>
        </div>
      </div>
      <div className={styles.destinationDivider}>
        <div className={styles.destinationDivider1} />
        <div className={styles.destinationDivider2} />
      </div>
    </div>
  );
};

export default DestinationItem;
