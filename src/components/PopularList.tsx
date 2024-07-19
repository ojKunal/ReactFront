import { FunctionComponent } from "react";
import CardColumns from "./CardColumns";
import styles from "./PopularList.module.css";

export type PopularListType = {
  className?: string;
};

const PopularList: FunctionComponent<PopularListType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.popularList, className].join(" ")}>
      <div className={styles.popularItem}>
        <div className={styles.destination}>
          <div className={styles.destinationInfo}>
            <h1 className={styles.travelersFavoriteChoice}>
              Travelers' favorite choice
            </h1>
            <div className={styles.destinationDetails}>
              <div className={styles.destinationName}>
                <h2 className={styles.ladakh}>Ladakh</h2>
                <div className={styles.travelCategory}>Travel Category</div>
              </div>
              <div className={styles.view}>
                <div className={styles.viewButton}>
                  <a className={styles.viewAll}>View All</a>
                  <div className={styles.viewIcon}>
                    <div className={styles.viewBackground} />
                    <div className={styles.div}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tourCard}>
          <CardColumns rectangle16="/rectangle-16@2x.png" />
          <CardColumns
            rectangle16="/rectangle-161@2x.png"
            propPadding="0px 5px 0px 0px"
          />
          <CardColumns
            rectangle16="/rectangle-162@2x.png"
            propPadding="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularList;
