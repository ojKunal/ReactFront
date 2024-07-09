import { FunctionComponent } from "react";
import styles from "./AirbnbFooter.module.css";

export type AirbnbFooterType = {
  className?: string;
};

const AirbnbFooter: FunctionComponent<AirbnbFooterType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.airbnbFooter, className].join(" ")}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.support}>Support</div>
          <div className={styles.helpCenter}>Help Center</div>
          <div className={styles.safetyInformation}>Safety information</div>
          <div className={styles.cancellationOptions}>Cancellation options</div>
          <div className={styles.ourCovid19Response}>Our COVID-19 Response</div>
          <div className={styles.supportingPeopleWith}>
            Supporting people with disabilities
          </div>
          <div className={styles.reportANeighborhoood}>
            Report a neighborhoood concern
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.community}>Community</div>
          <div className={styles.airbnborgDisasterRelief}>
            Airbnb.org: disaster relief housing
          </div>
          <div className={styles.supportAfghanRefugees}>
            Support: Afghan refugees
          </div>
          <div
            className={styles.celebratingDiversity}
          >{`Celebrating diversity & belonging`}</div>
          <div className={styles.combatingDiscriminatino}>
            Combating discriminatino
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.hosting}>Hosting</div>
          <div className={styles.tryHosting}>Try hosting</div>
          <div className={styles.aircoverProtectionFor}>
            AirCover: protection for Hosts
          </div>
          <div className={styles.exploreHostingResources}>
            Explore hosting resources
          </div>
          <div className={styles.visitOurCommunity}>
            Visit our community forum
          </div>
          <div className={styles.howToHost}>How to host responsibly</div>
        </div>
        <div className={styles.column3}>
          <div className={styles.about}>About</div>
          <div className={styles.newsroom}>Newsroom</div>
          <div className={styles.learnAboutNew}>Learn about new features</div>
          <div className={styles.letterFromOur}>Letter from our founders</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.investors}>Investors</div>
          <div className={styles.airbnbLuxe}>Airbnb Luxe</div>
        </div>
      </div>
      <div className={styles.kicker}>
        <div className={styles.kickerChild} />
        <div className={styles.subFooter}>
          <div className={styles.subfooterLinks}>
            <div className={styles.left}>
              <div className={styles.airbnbInc}>© 2022 Airbnb, Inc.</div>
              <div className={styles.legalLinks}>
                <div className={styles.legalIcons} />
              </div>
              <a className={styles.privacy}>Privacy</a>
              <div className={styles.legalLinks1}>
                <div className={styles.legalLinksChild} />
              </div>
              <div className={styles.terms}>Terms</div>
              <div className={styles.legalLinks2}>
                <div className={styles.legalLinksItem} />
              </div>
              <div className={styles.sitemap}>Sitemap</div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.languageCurrency}>
              <div className={styles.language}>
                <img className={styles.globeIcon} alt="" src="/globe-1.svg" />
                <div className={styles.englishUs}>English (US)</div>
              </div>
              <div className={styles.currency}>
                <img className={styles.dollar2Icon} alt="" src="/dollar2.svg" />
                <div className={styles.usd}>USD</div>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <img
                className={styles.socialMediaIcon}
                alt=""
                src="/social-media@2x.png"
              />
              <img
                className={styles.socialMediaIcon1}
                alt=""
                src="/social-media-1.svg"
              />
              <img
                className={styles.socialMediaIcon2}
                alt=""
                src="/social-media-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AirbnbFooter;
