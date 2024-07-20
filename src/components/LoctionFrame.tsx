import { FunctionComponent } from "react";
import DestinationItem from "./DestinationItem";
import styles from "./LoctionFrame.module.css";

export type LoctionFrameType = {
  className?: string;
};

const LoctionFrame: FunctionComponent<LoctionFrameType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.destinationTitleParent, className].join(" ")}>
      <div className={styles.destinationTitle}>
        <h1 className={styles.whereToNext}>Where to next?</h1>
      </div>
      <div className={styles.destinationList}>
        <div className={styles.destinationItem}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-22@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <h3 className={styles.singapore}>Singapore</h3>
            </div>
          </div>
        </div>
        <DestinationItem group22="/group-22-1@2x.png" dubai="Dubai" />
        <div className={styles.destinationItem1}>
          <DestinationItem
            group22="/group-22-2@2x.png"
            dubai="Bangkok"
            propHeight="unset"
            propWidth="unset"
            propFlex="1"
            propMinWidth="210px"
          />
          <div className={styles.destinationFooter}>
            <div className={styles.viewAllButton}>
              <div className={styles.viewAllLabel}>
                <a className={styles.viewAll}>View All</a>
                <div className={styles.viewAllIcon}>
                  <div className={styles.viewAllIcon1} />
                  <div className={styles.parent}>
                    <div className={styles.div}></div>
                    <div className={styles.travelCategory}>Travel Category</div>
                  </div>
                </div>
              </div>
              <div className={styles.destinationCity}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-22-3@2x.png"
                  />
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <h3 className={styles.kualaLumpur}>Kuala Lumpur</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoctionFrame;
