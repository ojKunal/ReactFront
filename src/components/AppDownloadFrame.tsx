import { FunctionComponent } from "react";
import styles from "./AppDownloadFrame.module.css";

export type AppDownloadFrameType = {
  className?: string;
};

const AppDownloadFrame: FunctionComponent<AppDownloadFrameType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.appDownloadContentWrapper, className].join(" ")}
    >
      <div className={styles.appDownloadContent}>
        <div className={styles.appInfo}>
          <div className={styles.appTitle}>
            <div className={styles.downloadTitle}>
              <div className={styles.downloadCall}>
                <h3 className={styles.downloadTheApp}>Download the app now.</h3>
              </div>
              <h1 className={styles.get5Off}>
                Get 5% off your 1st app booking
              </h1>
            </div>
          </div>
          <h2 className={styles.bookingsBetterOn}>
            Booking's better on the app. Use promo code "xsda123" to save!
          </h2>
        </div>
        <div className={styles.appStoreButtons}>
          <div className={styles.appButtons}>
            <img
              className={styles.appalPlay1Icon}
              loading="lazy"
              alt=""
              src="/appalplay-1@2x.png"
            />
            <div className={styles.appStoreButton}>
              <img
                className={styles.googlePlay1Icon}
                loading="lazy"
                alt=""
                src="/googleplay-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadFrame;
