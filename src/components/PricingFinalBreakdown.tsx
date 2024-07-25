import { FunctionComponent } from "react";
import styles from "./PricingFinalBreakdown.module.css";

export type DivbreakdownWrapperhasRateType = {
  className?: string;
};

const FinalPricingContainer: FunctionComponent<
  DivbreakdownWrapperhasRateType
> = ({ className = "" }) => {
  return (
    <div className={[styles.divbreakdownWrapperhasRate, className].join(" ")}>
      <div className={styles.divinlineFormsmall}>
        <div className={styles.inputnativeInput}>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame3.svg" />
          </div>
          <div className={styles.datesParent}>
            <a className={styles.dates}>Dates</a>
            <div className={styles.aug22}>21 Aug - 22 Aug</div>
          </div>
        </div>
        <div className={styles.divvDividerWrapper}>
          <div className={styles.divvDivider} />
        </div>
        <div className={styles.inputnativeInput1}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div className={styles.guestsParent}>
            <a className={styles.guests}>Guests</a>
            <a className={styles.a}>2</a>
          </div>
        </div>
      </div>
      <section className={styles.divroomRates}>
        <div className={styles.roomPriceNightParent}>
          <div className={styles.roomPriceNight}>
            <div className={styles.doubleBedPrivate}>
              Double Bed Private Ensuite
            </div>
            <a className={styles.room}>1 Room</a>
            <div className={styles.x1Night}>€17.96 x 1 Night</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent}>
              <div className={styles.divtagTextWrapper}>
                <div className={styles.divtagText}>
                  <b className={styles.b}>-36%</b>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameFrame}>
                  <img
                    className={styles.frameIcon2}
                    loading="lazy"
                    alt=""
                    src="/frame-21.svg"
                  />
                </div>
                <div className={styles.parent}>
                  <a className={styles.a1}>€17.96</a>
                  <div className={styles.divdiscountPricestrikethrou}>
                    <div className={styles.div}>€28.06</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divrateParent}>
          <div className={styles.divrate}>
            <div className={styles.roomPriceNightWrapper}>
              <div className={styles.roomPriceNight1}>
                <div className={styles.basicDoubleBed}>
                  Basic Double Bed Private Ensuite
                </div>
                <div className={styles.room1}>1 Room</div>
                <div className={styles.x1Night1}>€17.96 x 1 Night</div>
                <div className={styles.divtagTextContainer}>
                  <div className={styles.divtagText1}>
                    <b className={styles.b1}>-36%</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame-31.svg"
                />
              </div>
              <div className={styles.group}>
                <div className={styles.div1}>€17.96</div>
                <div className={styles.divdiscountPricestrikethrou1}>
                  <div className={styles.div2}>€28.06</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divrate1}>
            <div className={styles.bedPriceNight}>
              <div className={styles.standard6Bed}>
                Standard 6 Bed Mixed Dorm Ensuite
              </div>
              <div className={styles.bed}>1 Bed</div>
              <div className={styles.x1Night2}>€4.34 x 1 Night</div>
              <div className={styles.divtagTextFrame}>
                <div className={styles.divtagText2}>
                  <b className={styles.b2}>-36%</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameWrapper2}>
                <img
                  className={styles.frameIcon4}
                  loading="lazy"
                  alt=""
                  src="/frame-41.svg"
                />
              </div>
              <div className={styles.container}>
                <div className={styles.div3}>€4.34</div>
                <div className={styles.divdiscountPricestrikethrou2}>
                  <div className={styles.div4}>€6.78</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent3}>
          <div className={styles.totalPayableParent}>
            <div className={styles.totalPayable}>
              <div className={styles.total}>Total</div>
              <div className={styles.payableNow}>Payable Now</div>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div5}>€40.26</div>
              <div className={styles.wrapper}>
                <div className={styles.div6}>€6.40</div>
              </div>
            </div>
          </div>
          <button className={styles.buttonbtnContentfullWidth}>
            <b className={styles.bookNow}>Book Now</b>
            <div className={styles.frameWrapper3}>
              <img className={styles.frameIcon5} alt="" src="/frame-51.svg" />
            </div>
          </button>
          <div className={styles.frameParent4}>
            <div className={styles.divtagIconParent}>
              <img
                className={styles.divtagIcon}
                loading="lazy"
                alt=""
                src="/divtagicon.svg"
              />
              <div className={styles.divtagTexttagTextIcon}>
                <b className={styles.freeCancellation}>Free Cancellation</b>
              </div>
            </div>
            <div className={styles.changeOfPlans}>
              Change of plans? No problem. Choose free cancellation and you can
              cancel your booking free of charge before 23:59 Aug 18, 2024.
            </div>
          </div>
        </div>
        <div className={styles.imageContainerWrapper}>
          <div className={styles.imageContainer}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img.svg"
            />
            <img
              className={styles.imgIcon1}
              loading="lazy"
              alt=""
              src="/img-1.svg"
            />
            <img
              className={styles.imgIcon2}
              loading="lazy"
              alt=""
              src="/img-2@2x.png"
            />
            <img
              className={styles.imgIcon3}
              loading="lazy"
              alt=""
              src="/img-3.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalPricingContainer;
