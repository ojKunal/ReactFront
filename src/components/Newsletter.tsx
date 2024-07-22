import { FunctionComponent } from "react";
import BlogCard from "./BlogCard";
import styles from "./Newsletter.module.css";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({ className = "" }) => {
  return (
    <section className={[styles.blogContentWrapper, className].join(" ")}>
      <div className={styles.blogContent}>
        <div className={styles.blogItems}>
          <BlogCard
            blogCard="/rectangle-33@2x.png"
            checkOutTheBlog="Check out the  blog"
          />
          <BlogCard
            blogCard="/rectangle-33-1@2x.png"
            checkOutTheBlog="Save on fun with credits"
          />
          <BlogCard
            blogCard="/rectangle-33-2@2x.png"
            checkOutTheBlog={`Share joy & get rewarded`}
          />
        </div>
        <div className={styles.blogContentInner}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className={styles.joinCommunity}>
              <h1 className={styles.joinOurAdventurous}>
                Join our adventurous community!
              </h1>
              <div className={styles.communityImages}>
                <div className={styles.communityImage} />
                <div className={styles.communityImage1} />
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletterContent}>
                <div className={styles.signUpTo}>
                  Sign up to our newsletter for deals, inspo and other travel
                  treats!
                </div>
                <div className={styles.newsletterInput}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.yourEmail}>
                      <span className={styles.yourEmailTxtContainer}>
                        <span>
                          <span></span>
                        </span>
                        <span className={styles.yourEmail1}>
                          <span>
                            <span className={styles.span}>{`  `}</span>
                          </span>
                          <span>Your Email</span>
                        </span>
                      </span>
                    </div>
                    <div className={styles.submitEmail}>
                      <button className={styles.submitButton}>
                        <div className={styles.submitButtonChild} />
                        <b className={styles.submit}>Submit</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.privacyNote}>
                <div className={styles.justSoYouContainer}>
                  <span className={styles.justSoYouContainer1}>
                    Just so you know, we’ll be able to see if you receive and
                    open our emails to help us monitor the success of our
                    marketing campaigns. You’ll find further details in our 
                    <a
                      className={styles.dataProtectionNotice}
                      href="https://www.hostelworld.com/securityprivacy/"
                      target="_blank"
                    >
                      <span className={styles.dataProtectionNotice1}>
                        data protection notice
                      </span>
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
