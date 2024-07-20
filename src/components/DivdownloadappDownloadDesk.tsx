import { FunctionComponent } from "react";
import styles from "./DivdownloadappDownloadDesk.module.css";

const DivdownloadappDownloadDesk: FunctionComponent = () => {
  return (
    <div className={styles.divdownloadappDownloadDesk}>
      <img
        className={styles.divotaBannerIcon}
        alt=""
        src="/divotabanner@2x.png"
      />
      <section className={styles.downloadSpacingParent}>
        <img
          className={styles.downloadSpacingIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img className={styles.divshapeIcon} alt="" src="/divshape.svg" />
        <div className={styles.downloadContent}>
          <div className={styles.sloganContainer}>
            <h1 className={styles.get10Off}>Get 10% off your 1st booking</h1>
            <div className={styles.p}>
              <div className={styles.usePromoCode}>
                Use promo code to save on the app!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.emailInputContainerParent}>
          <div className={styles.emailInputContainer}>
            <div className={styles.emailInputWrapper}>
              <div className={styles.emailInputContent}>
                <div className={styles.divtip}>
                  <div className={styles.getAMagic}>
                    Get a magic link sent to your email
                  </div>
                </div>
                <div className={styles.emailInputArea}>
                  <input
                    className={styles.divdataInfo}
                    placeholder="Email"
                    type="text"
                  />
                  <button className={styles.buttonklkButtonklkButtonP}>
                    <a className={styles.send}>Send</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.separator}>
              <div className={styles.separatorContent}>
                <div className={styles.before}>
                  <div className={styles.text} />
                </div>
              </div>
              <a className={styles.or}>Or</a>
              <div className={styles.separatorContent1}>
                <div className={styles.after}>
                  <div className={styles.text1} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.qrCodeContainerWrapper}>
            <div className={styles.qrCodeContainer}>
              <a className={styles.scanTheMagic}>
                Scan the magic code to download Klook
              </a>
              <div className={styles.divappDownloadQrcode}>
                <div className={styles.videoappDownloadCanvasdemo}>
                  <img
                    className={styles.divcodeLogoIcon}
                    loading="lazy"
                    alt=""
                    src="/divcodelogo@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivdownloadappDownloadDesk;
