import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Popularframe from "../components/Popularframe";
import PopularList from "../components/PopularList";
import ContentCard from "../components/ContentCard";
import LoctionFrame from "../components/LoctionFrame";
import AppDownloadFrame from "../components/AppDownloadFrame";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styles from "./Landingpage.module.css";

const Landingpage: FunctionComponent = () => {
  return (
    <div className={styles.Landingpage}>
      <section className={styles.headerBackgroundParent}>
        <img
          className={styles.headerBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <h1 className={styles.yourWorldOfContainer}>
          <span className={styles.yourWorldOfContainer1}>
            <span>{`Your `}</span>
            <span className={styles.worldOf}>world of</span>
            <span> joy</span>
          </span>
        </h1>
        <div className={styles.div}></div>
      </section>
      <div className={styles.cinematicRenderingShowingGr} />
      <Navigation1 />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
        <div className={styles.discoverThePossibilities}>
          Discover the possibilities
        </div>
        <b className={styles.search}>SEARCH</b>
      </div>
      <div className={styles.slogan}>
        <h3 className={styles.fromLocalEscapes}>
          From local escapes to far-flung adventures, find what makes you happy
          anytime, anywhere
        </h3>
      </div>
      <div className={styles.mobileStorePortrait1} />
      <div className={styles.hero}>
        <img className={styles.heroChild} alt="" src="/rectangle-30.svg" />
        <img
          className={styles.imgpshFullsizeAnim1Icon}
          loading="lazy"
          alt=""
          src="/imgpsh-fullsize-anim-1@2x.png"
        />
      </div>
      <Popularframe />
      <PopularList />
      <section className={styles.hostelDescriptionWrapper}>
        <div className={styles.hostelDescription}>
          <ContentCard />
          <LoctionFrame />
        </div>
      </section>
      <AppDownloadFrame />
      <Newsletter />
      <div className={styles.image2} />
      <Footer />
    </div>
  );
};

export default Landingpage;
