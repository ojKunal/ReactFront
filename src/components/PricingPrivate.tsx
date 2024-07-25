import { FunctionComponent } from "react";
import styles from "./DivroomContainer.module.css";

export type DivroomContainerType = {
  className?: string;
};

const DivroomContainer: FunctionComponent<DivroomContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divroomContainer, className].join(" ")}>
      <section className={styles.mainContainer}>
        <div className={styles.divcarousel}>
          <img
            className={styles.imgactiveSlidevLazyImageIcon}
            loading="lazy"
            alt=""
            src="/imgactiveslidevlazyimagevlazyimageloaded@2x.png"
          />
          <div className={styles.divsliderDotactive} />
          <div className={styles.divsliderDot} />
          <div className={styles.sliderDotsContainer}>
            <div className={styles.divsliderDot1} />
            <div className={styles.divsliderDot2} />
          </div>
          <div className={styles.divsliderDot3} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.headingContainer}>
            <div className={styles.basicDoubleBedPrivateEnsuiWrapper}>
              <div className={styles.basicDoubleBed}>
                Basic Double Bed Private Ensuite
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.detailsRow}>
                <div className={styles.roomFeatures}>
                  <div className={styles.sleepsEnsuite}>
                    <img
                      className={styles.sleepsIcon}
                      loading="lazy"
                      alt=""
                      src="/frame1.svg"
                    />
                    <a className={styles.sleeps2}> Sleeps 2</a>
                  </div>
                  <div className={styles.sleepsEnsuite1}>
                    <img
                      className={styles.frameIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-1.svg"
                    />
                    <a className={styles.ensuite}> Ensuite</a>
                  </div>
                </div>
                <div className={styles.divtagText}>
                  <b className={styles.only3Rooms}>Only 3 rooms left!</b>
                </div>
              </div>
            </div>
            <div className={styles.divnotesDivider}>
              <div className={styles.pricesArePer}>Prices are per room -</div>
              <input
                className={styles.taxInfoContainer}
                placeholder="Taxes Not Included"
                type="text"
              />
              <div className={styles.spacerContainer}>
                <img className={styles.spacerIcon} alt="" src="/frame-2.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.divrateList}>
        <div className={styles.divraterateContainerhighli}>
          <div className={styles.highlightedRateContent}>
            <div className={styles.priceContainer}>
              <div className={styles.priceDetails}>
                <div className={styles.parent}>
                  <a className={styles.a}>€17.96</a>
                  <div className={styles.strikethroughPriceContainer}>
                    <div className={styles.divtagText1}>
                      <b className={styles.discountPercentage}>-36%</b>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyWrapper}>
                      <div className={styles.spanpriceStrikethroughbody}>
                        <a className={styles.a1}>€28.06</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cancellationInfoContainer}>
                    <img
                      className={styles.cancellationIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-3.svg"
                    />
                    <a className={styles.freeCancellation}>Free Cancellation</a>
                  </div>
                </div>
              </div>
              <div className={styles.guestCounterContainer}>
                <div className={styles.divcounterButtonguestsCoun}>
                  <div className={styles.guestCount}>
                    <img
                      className={styles.guestIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-4.svg"
                    />
                  </div>
                  <a className={styles.guestNumber}>1</a>
                  <div className={styles.guestCount1}>
                    <img
                      className={styles.frameIcon1}
                      loading="lazy"
                      alt=""
                      src="/frame-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.roomLabelContainer}>
                  <a className={styles.room}>1 Room</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divdivider} />
        </div>
        <div className={styles.rateContainer}>
          <div className={styles.rateContent}>
            <a className={styles.a2}>€22.32</a>
            <div className={styles.rateDetails}>
              <div className={styles.rateInfo}>
                <div className={styles.originalPriceContainerParent}>
                  <div className={styles.originalPriceContainer}>
                    <div className={styles.divtagText2}>
                      <b className={styles.discountValue}>-36%</b>
                    </div>
                    <div className={styles.strikethroughPrice}>
                      <div className={styles.spanpriceStrikethroughbody1}>
                        <div className={styles.div}>€34.87</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rateFeatures}>
                    <div className={styles.featuresIcons}>
                      <img
                        className={styles.featureIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-6.svg"
                      />
                      <img
                        className={styles.featureIcon1}
                        loading="lazy"
                        alt=""
                        src="/frame-7.svg"
                      />
                    </div>
                    <div className={styles.featuresLabels}>
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
                <div className={styles.buttonContent}>
                  <img
                    className={styles.buttonIcon}
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

export default DivroomContainer;
