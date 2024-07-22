import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.contact, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.contactDetails}>
          <b className={styles.contactInfo}>
            <span className={styles.contactInfoTxtContainer}>
              <p className={styles.contactInfo1}>CONTACT INFO</p>
            </span>
          </b>
          <div className={styles.emailFdgnhillscoffeegmailc}>
            <span>
              <p className={styles.emailFdgnhillscoffeegmailc1}>
                <span className={styles.email}>Email:</span>
                <span> fdgnhillscoffee@gmail.com</span>
              </p>
              <p className={styles.address4454LakesStreetL}>
                <b className={styles.address}>{`Address: `}</b>
                <span className={styles.lakesStreetLas}>
                  4454 Lakes Street, Las Vegas Nevada 89130, United States
                </span>
              </p>
              <p className={styles.phone145454545454}>
                <b className={styles.phone}>Phone:</b>
                <span> +1 45454545454</span>
              </p>
            </span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.socialIcons}>
            <div className={styles.socialMedia}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-1-1@2x.png"
              />
              <img
                className={styles.image8Icon}
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
            </div>
          </div>
          <div className={styles.quickLinksParent}>
            <b className={styles.quickLinks}>Quick Links</b>
            <div className={styles.quickLinks1}>
              <div className={styles.lowAcidBlends}>Low-Acid Blends</div>
              <a className={styles.origins}>Origins</a>
              <div className={styles.roast}>Roast</div>
              <div className={styles.teas}>Teas</div>
              <a className={styles.gifts}>{`Gifts `}</a>
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <b className={styles.accommodation}>Accommodation</b>
          <div className={styles.footerNavigation}>
            <div className={styles.ourStory}>Our Story</div>
            <div className={styles.footerLinksColumn}>
              <div className={styles.howItsMade}>How It's Made</div>
              <div className={styles.footerLinkItems}>
                <div className={styles.subscribeSave}>{`Subscribe & Save`}</div>
              </div>
              <div className={styles.footerLinkItems1}>
                <div className={styles.hiddenHillsCoffee}>
                  Hidden Hills Coffee Company™ Blog
                </div>
              </div>
              <div className={styles.ambassadorsOfClean}>
                Ambassadors of Clean Coffee
              </div>
              <div className={styles.businessLinks}>
                <div className={styles.affiliateSignUp}>Affiliate Sign up</div>
                <div className={styles.wholesaleSignUp}>Wholesale Sign Up</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forTravellersParent}>
          <b className={styles.forTravellers}>
            <span className={styles.forTravellersTxtContainer}>
              <p className={styles.forTravellers1}>FOR TRAVELLERS</p>
            </span>
          </b>
          <div className={styles.travelerLinks}>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.infoLinks}>
              <div className={styles.reviewsLink}>
                <div className={styles.reviews}>Reviews</div>
              </div>
              <div className={styles.policyLinks}>
                <div className={styles.shippingLink}>
                  <div className={styles.shippingPolicy}>Shipping Policy</div>
                  <div className={styles.emailIcon}>
                    <img
                      className={styles.icoutlineMailIcon}
                      loading="lazy"
                      alt=""
                      src="/icoutlinemail.svg"
                    />
                  </div>
                </div>
                <div className={styles.legalLinks}>
                  <a className={styles.privacyPolicy}>Privacy Policy</a>
                  <div className={styles.termsAndConditions}>
                    Terms and Conditions
                  </div>
                  <a className={styles.faq}>FAQ</a>
                  <div className={styles.blog}>Blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBackground}>
          <img
            className={styles.footerBackgroundChild}
            alt=""
            src="/rectangle-17.svg"
          />
          <div className={styles.footerImage} />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.copyright2021By}>© Copyright 2021 by </div>
      </div>
    </footer>
  );
};

export default Footer;
