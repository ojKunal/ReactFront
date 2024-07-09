import { FunctionComponent } from "react";
import AirbnbComment from "./AirbnbComment";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.reviewsParent, className].join(" ")}>
      <div className={styles.reviews}>
        <div className={styles.divider} />
      </div>
      <div className={styles.reviewsContent}>
        <div className={styles.overallRating}>
          <div className={styles.ratingContainer}>
            <div className={styles.averageRating}>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star-2.svg"
              />
              <div className={styles.averageWrapper}>
                <div className={styles.average}>5.0</div>
              </div>
              <div className={styles.ratingDivider}>
                <div className={styles.dot} />
              </div>
              <h2 className={styles.reviews1}>7 reviews</h2>
            </div>
            <div className={styles.column}>
              <div className={styles.reviewCategory}>
                <div className={styles.label}>Cleanliness</div>
                <div className={styles.barsContainer}>
                  <div className={styles.bars}>
                    <div className={styles.innerBars}>
                      <div className={styles.bar}>
                        <div className={styles.bar1}>
                          <div className={styles.barFill}>
                            000000000000000000000000000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.barGap}>5.0</div>
                  </div>
                </div>
              </div>
              <div className={styles.reviewCategory1}>
                <div className={styles.label1}>Communication</div>
                <div className={styles.reviewCategoryInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.barWrapper}>
                      <div className={styles.bar2}>
                        <div className={styles.bar3}>
                          <div className={styles.div}>
                            000000000000000000000000000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.div1}>5.0</div>
                  </div>
                </div>
              </div>
              <div className={styles.reviewCategory2}>
                <div className={styles.label2}>Check-in</div>
                <div className={styles.reviewCategoryChild}>
                  <div className={styles.frameGroup}>
                    <div className={styles.barContainer}>
                      <div className={styles.bar4}>
                        <div className={styles.bar5}>
                          <div className={styles.div2}>
                            000000000000000000000000000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.div3}>5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.reviewCategory3}>
              <div className={styles.label3}>Accuracy</div>
              <div className={styles.moreBarsContainer}>
                <div className={styles.moreBars}>
                  <div className={styles.moreInnerBars}>
                    <div className={styles.bar6}>
                      <div className={styles.bar7}>
                        <div className={styles.moreBarFill}>
                          000000000000000000000000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.moreBarGap}>5.0</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCategory4}>
              <div className={styles.label4}>Location</div>
              <div className={styles.frameDiv}>
                <div className={styles.frameContainer}>
                  <div className={styles.barFrame}>
                    <div className={styles.bar8}>
                      <div className={styles.bar9}>
                        <div className={styles.div4}>0000000000000000</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.div5}>4.9</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCategory5}>
              <div className={styles.label5}>Value</div>
              <div className={styles.reviewCategoryInner1}>
                <div className={styles.frameParent1}>
                  <div className={styles.barWrapper1}>
                    <div className={styles.bar10}>
                      <div className={styles.bar11}>
                        <div className={styles.div6}>0000000000000</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.div7}>4.7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comments}>
          <div className={styles.row}>
            <AirbnbComment
              avatar="/avatar-2.svg"
              title="Jose"
              subtitle="December 2021"
              comment="Host was very attentive."
            />
            <AirbnbComment
              avatar="/avatar-3.svg"
              title="Luke"
              subtitle="December 2021"
              comment="Nice place to stay!"
            />
          </div>
          <div className={styles.row1}>
            <div className={styles.airbnbComment}>
              <div className={styles.user}>
                <img
                  className={styles.avatarIcon}
                  loading="lazy"
                  alt=""
                  src="/avatar-4.svg"
                />
                <div className={styles.titleSubtitle}>
                  <div className={styles.title}>Shayna</div>
                  <div className={styles.subtitle}>December 2021</div>
                </div>
              </div>
              <div className={styles.comment}>
                Wonderful neighborhood, easy access to restaurants and the
                subway, cozy studio apartment with a super comfortable bed.
                Great host, super helpful and responsive. Cool murphy bed...
              </div>
              <div className={styles.iconText}>
                <a className={styles.text}>Show more</a>
                <img
                  className={styles.chevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
            <AirbnbComment
              avatar="/avatar-5.svg"
              title="Josh"
              subtitle="November 2021"
              comment="Well designed and fun space, neighborhood has lots of energy and amenities."
            />
          </div>
          <div className={styles.row2}>
            <AirbnbComment
              avatar="/avatar-6.svg"
              title="Vladko"
              subtitle="November 2020"
              comment="This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price."
            />
            <div className={styles.airbnbComment1}>
              <div className={styles.user1}>
                <img
                  className={styles.avatarIcon1}
                  loading="lazy"
                  alt=""
                  src="/avatar-7.svg"
                />
                <div className={styles.titleSubtitle1}>
                  <div className={styles.title1}>Jennifer</div>
                  <div className={styles.subtitle1}>January 2022</div>
                </div>
              </div>
              <div className={styles.comment1}>
                <p className={styles.aCentricPlace}>
                  A centric place, near of a sub station and a supermarket with
                  everything you need.
                </p>
                <p className={styles.p}>...</p>
              </div>
              <div className={styles.iconText1}>
                <a className={styles.nextMore}>Show more</a>
                <img
                  className={styles.chevronRightIcon1}
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreCommentsButtonContainer}>
        <button className={styles.button}>
          <div className={styles.buttonBase}>
            <img className={styles.icon} alt="" src="/icon3.svg" />
            <div className={styles.text1}>Show all 12 reviews</div>
            <img className={styles.icon1} alt="" src="/icon2.svg" />
          </div>
        </button>
      </div>
      <div className={styles.reviews2}>
        <div className={styles.divider1} />
      </div>
      <div className={styles.location}>
        <h2 className={styles.whereYoullBe}>Where you’ll be</h2>
        <div className={styles.locationMap}>
          <div className={styles.map}>
            <img className={styles.mapIcon} alt="" src="/map@2x.png" />
            <div className={styles.iconButtonBase}>
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/icon-15.svg"
              />
            </div>
            <div className={styles.actions}>
              <div className={styles.iconButton}>
                <div className={styles.iconButtonBase1}>
                  <img
                    className={styles.icon3}
                    loading="lazy"
                    alt=""
                    src="/icon-16.svg"
                  />
                </div>
              </div>
              <div className={styles.iconButton1}>
                <div className={styles.iconButtonBase2}>
                  <img
                    className={styles.icon4}
                    loading="lazy"
                    alt=""
                    src="/icon-17.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popover}>
            <div className={styles.body}>
              <div className={styles.popupTitle}>
                <div className={styles.titleSubtitle2}>
                  <div className={styles.title2}>
                    Exact location provided after booking
                  </div>
                  <div className={styles.subtitle2}>Subtitle</div>
                </div>
                <div className={styles.action}>Action</div>
              </div>
            </div>
            <img className={styles.tipIcon} alt="" src="/tip.svg" />
          </div>
          <div className={styles.closeButtonContainer}>
            <div className={styles.iconButton2}>
              <div className={styles.iconButtonBase3}>
                <img
                  className={styles.icon5}
                  loading="lazy"
                  alt=""
                  src="/icon-18.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.locationDetails}>
        <div className={styles.bordeauxNouvelleAquitaine}>
          Bordeaux, Nouvelle-Aquitaine, France
        </div>
        <div className={styles.veryDynamicAnd}>
          Very dynamic and appreciated district by the people of Bordeaux thanks
          to rue St James and place Fernand Lafargue. Home to many historical
          monuments such as the Grosse Cloche, the Porte de Bourgogne and the
          Porte Cailhau, and cultural sites such as the Aquitaine Museum.
        </div>
        <div className={styles.iconText2}>
          <a className={styles.text2}>Show more</a>
          <div className={styles.seeMoreIconContainer}>
            <img
              className={styles.chevronRightIcon2}
              loading="lazy"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.dividerParent}>
        <div className={styles.divider2} />
        <div className={styles.aboutTheHost}>
          <div className={styles.header}>
            <div className={styles.user2}>
              <img
                className={styles.avatarIcon2}
                loading="lazy"
                alt=""
                src="/avatar-8@2x.png"
              />
              <div className={styles.titleSubtitle3}>
                <h2 className={styles.title3}>Hosted by Ghazal</h2>
                <div className={styles.subtitle3}>Joined May 2021</div>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.iconText3}>
                <img
                  className={styles.starIcon1}
                  loading="lazy"
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.badgeLabel}>12 Reviews</div>
              </div>
              <div className={styles.iconText4}>
                <img
                  className={styles.shieldTickIcon}
                  alt=""
                  src="/shieldtick.svg"
                />
                <div className={styles.text3}>Identity verified</div>
              </div>
              <div className={styles.iconText5}>
                <img className={styles.badgeIcon} alt="" src="/badge.svg" />
                <div className={styles.text4}>Superhost</div>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.ghazalIsA}>Ghazal is a Superhost</div>
            <div className={styles.superhostsAreExperienced}>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </div>
            <div className={styles.responseRate100}>Response rate: 100%</div>
            <div className={styles.responseTimeWithin}>
              Response time: within an hour
            </div>
          </div>
          <button className={styles.button1}>
            <div className={styles.buttonBase1}>
              <img className={styles.icon6} alt="" src="/icon3.svg" />
              <div className={styles.text5}>Contact Host</div>
              <img className={styles.icon7} alt="" src="/icon2.svg" />
            </div>
          </button>
          <div className={styles.iconText6}>
            <img
              className={styles.disclaimerIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className={styles.toProtectYour}>
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingRules}>
        <div className={styles.divider3} />
        <div className={styles.thingsToKnow}>
          <h2 className={styles.thingsToKnow1}>Things to know</h2>
          <div className={styles.columns}>
            <div className={styles.column2}>
              <div className={styles.houseRules}>House rules</div>
              <div className={styles.list}>
                <div className={styles.iconText7}>
                  <img
                    className={styles.clockIcon}
                    loading="lazy"
                    alt=""
                    src="/clock.svg"
                  />
                  <div className={styles.text6}>Check-in: After 4:00 PM</div>
                </div>
                <div className={styles.iconText8}>
                  <img
                    className={styles.clockIcon1}
                    loading="lazy"
                    alt=""
                    src="/clock.svg"
                  />
                  <div className={styles.text7}>Checkout: 10:00 AM</div>
                </div>
                <div className={styles.iconText9}>
                  <img
                    className={styles.doorEnterIcon}
                    loading="lazy"
                    alt=""
                    src="/doorenter.svg"
                  />
                  <div className={styles.text8}>Self check-in with lockbox</div>
                </div>
                <div className={styles.iconText10}>
                  <img
                    className={styles.shoppingCartIcon}
                    loading="lazy"
                    alt=""
                    src="/shoppingcart.svg"
                  />
                  <div className={styles.text9}>
                    Not suitable for infants (under 2 years)
                  </div>
                </div>
                <div className={styles.iconText11}>
                  <img
                    className={styles.fireIcon}
                    loading="lazy"
                    alt=""
                    src="/fire.svg"
                  />
                  <div className={styles.text10}>No smoking</div>
                </div>
                <div className={styles.iconText12}>
                  <img
                    className={styles.boneIcon}
                    loading="lazy"
                    alt=""
                    src="/bone@2x.png"
                  />
                  <div className={styles.text11}>No pets</div>
                </div>
                <div className={styles.iconText13}>
                  <img
                    className={styles.partyIcon}
                    loading="lazy"
                    alt=""
                    src="/party.svg"
                  />
                  <div className={styles.text12}>No parties or events</div>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.healthSafety}>{`Health & safety`}</div>
              <div className={styles.list1}>
                <div className={styles.iconText14}>
                  <img
                    className={styles.sparkles2Icon}
                    loading="lazy"
                    alt=""
                    src="/sparkles2.svg"
                  />
                  <div className={styles.text13}>
                    <span
                      className={styles.committedToAirbnbs}
                    >{`Committed to Airbnb's enhanced cleaning process. `}</span>
                    <span className={styles.showMore}>Show more</span>
                  </div>
                </div>
                <div className={styles.iconText15}>
                  <img
                    className={styles.sprayPaintIcon}
                    loading="lazy"
                    alt=""
                    src="/spraypaint.svg"
                  />
                  <div className={styles.text14}>
                    Airbnb's social-distancing and other COVID-19-related
                    guidelines apply
                  </div>
                </div>
                <div className={styles.iconText16}>
                  <img className={styles.windIcon} alt="" src="/wind.svg" />
                  <div className={styles.text15}>Carbon monoxide alarm</div>
                </div>
                <div className={styles.iconText17}>
                  <img className={styles.washerIcon} alt="" src="/washer.svg" />
                  <div className={styles.text16}>Smoke alarm</div>
                </div>
                <div className={styles.iconText18}>
                  <img
                    className={styles.creditCardIcon}
                    alt=""
                    src="/creditcard.svg"
                  />
                  <div className={styles.text17}>
                    Security Deposit - if you damage the home, you may be
                    charged up to $566
                  </div>
                </div>
              </div>
              <div className={styles.iconText19}>
                <div className={styles.text18}>Show more</div>
                <img
                  className={styles.chevronRightIcon3}
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
            <div className={styles.column4}>
              <div className={styles.cancellationPolicy}>
                Cancellation policy
              </div>
              <div className={styles.freeCancellationBefore}>
                Free cancellation before Feb 14
              </div>
              <div className={styles.iconText20}>
                <div className={styles.text19}>Show more</div>
                <img
                  className={styles.chevronRightIcon4}
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
