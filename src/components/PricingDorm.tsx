import { FunctionComponent } from "react";
import styles from "./PricingDorm.module.css";

export type DivroomContainer1Type = {
  className?: string;
};

const DormroomContainer: FunctionComponent<DivroomContainer1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divroomContainer, className].join(" ")}>
      <section className={styles.divcarouselParent}>
        <div className={styles.divcarousel}>
          <img
            className={styles.imgactiveSlidevLazyImageIcon}
            loading="lazy"
            alt=""
            src="/imgactiveslidevlazyimagevlazyimageloaded1@2x.png"
          />
          <div className={styles.divsliderDotactive} />
          <div className={styles.divsliderDot} />
          <div className={styles.divsliderDotParent}>
            <div className={styles.divsliderDot1} />
            <div className={styles.divsliderDot2} />
          </div>
          <div className={styles.divsliderDot3} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.titleContainerWrapper}>
              <div className={styles.titleContainer}>
                <div className={styles.standard6Bed}>
                  Standard 6 Bed Mixed Dorm Ensuite
                </div>
                <div className={styles.detailsContainerParent}>
                  <div className={styles.detailsContainer}>
                    <div className={styles.divbody2RegroomDetailsco}>
                      <div className={styles.bedMixedDorm}>
                        6 Bed Mixed Dorm without Air Conditioning, En suite
                        Washroom, Digital Lockers, Reading Light, Bed Fans,
                        Cloth Hanger, International Sockets, Key Card Access.
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.frameIcon}
                        loading="lazy"
                        alt=""
                        src="/frame2.svg"
                      />
                      <div className={styles.sleeps6Wrapper}>
                        <a className={styles.sleeps6}> Sleeps 6</a>
                      </div>
                    </div>
                    <div className={styles.divtagText}>
                      <b className={styles.bestBedPrice}>Best Bed Price</b>
                    </div>
                  </div>
                  <div className={styles.itoggleDescriptioniconCoreWrapper}>
                    <img
                      className={styles.itoggleDescriptioniconCore}
                      loading="lazy"
                      alt=""
                      src="/itoggledescriptioniconcorechevrondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divnotesDivider}>
              <div className={styles.pricesArePer}>Prices are per bed -</div>
              <input
                className={styles.divnotesDividerChild}
                placeholder="Taxes Not Included"
                type="text"
              />
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divrateList}>
        <div className={styles.divraterateContainerhighli}>
          <div className={styles.priceContainerWrapper}>
            <div className={styles.priceContainer}>
              <div className={styles.innerPriceDetailsWrapper}>
                <div className={styles.innerPriceDetails}>
                  <a className={styles.a}>€4.34</a>
                  <div className={styles.divtagTextParent}>
                    <div className={styles.divtagText1}>
                      <a className={styles.a1}>-36%</a>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyWrapper}>
                      <div className={styles.spanpriceStrikethroughbody}>
                        <a className={styles.a2}>€6.78</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.frameIcon2}
                      loading="lazy"
                      alt=""
                      src="/frame-3.svg"
                    />
                    <a className={styles.freeCancellation}>Free Cancellation</a>
                  </div>
                </div>
              </div>
              <div className={styles.divcounterButtonguestsCounParent}>
                <div className={styles.divcounterButtonguestsCoun}>
                  <div className={styles.counterButtons}>
                    <img
                      className={styles.emptyCounterButton}
                      loading="lazy"
                      alt=""
                      src="/frame-4.svg"
                    />
                  </div>
                  <a className={styles.guestCount}>1</a>
                  <div className={styles.counterButtons1}>
                    <img
                      className={styles.frameIcon3}
                      loading="lazy"
                      alt=""
                      src="/frame-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.bedWrapper}>
                  <a className={styles.bed}>1 Bed</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divdivider} />
        </div>
        <div className={styles.rateContainer}>
          <div className={styles.rateDetails}>
            <a className={styles.a3}>€7.01</a>
            <div className={styles.frameParent1}>
              <div className={styles.innerRateStrikethroughWrapper}>
                <div className={styles.innerRateStrikethrough}>
                  <div className={styles.divtagTextGroup}>
                    <div className={styles.divtagText2}>
                      <b className={styles.b}>-36%</b>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyContainer}>
                      <div className={styles.spanpriceStrikethroughbody1}>
                        <div className={styles.div}>€10.96</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.includedIconsParent}>
                    <div className={styles.includedIcons}>
                      <img
                        className={styles.emptyIncludedIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-6.svg"
                      />
                      <img
                        className={styles.emptyIncludedIcon1}
                        loading="lazy"
                        alt=""
                        src="/frame-7.svg"
                      />
                    </div>
                    <div className={styles.freeCancellationParent}>
                      <div className={styles.freeCancellation1}>
                        Free Cancellation
                      </div>
                      <div className={styles.breakfastIncluded}>
                        Breakfast Included
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.buttonbtnContent}>
                <div className={styles.emptyButtonContentWrapper}>
                  <img
                    className={styles.emptyButtonContent}
                    loading="lazy"
                    alt=""
                    src="/frame-8.svg"
                  />
                </div>
                <a className={styles.add}>Add</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DormroomContainer;
