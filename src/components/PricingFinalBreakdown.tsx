import { FunctionComponent, useEffect, useState } from "react";
import { usePricingContext } from "./PricingContext"; // Adjust path as necessary
import styles from "./PricingFinalBreakdown.module.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

export type DivbreakdownWrapperhasRateType = {
  className?: string;
};

const FinalPricingContainer: FunctionComponent<
  DivbreakdownWrapperhasRateType
> = ({ className = "" }) => {
  // Use the PricingContext values
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust 400 to the height at which you want the sticky behavior to change
      if (scrollTop > 690 && scrollTop < 2500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const {
    maxPrice1,
    setMaxPrice1,
    discountPrice1,
    setDiscountPrice1,
    selectedBeds1,
    setSelectedBeds1,
    currency1,
    setCurrency1,
    percent1,
    setPercent1,
    isDormShow1,
    setIsDormShow1,
    doomsName,
    maxPrice2,
    setMaxPrice2,
    discountPrice2,
    setDiscountPrice2,
    selectedBeds2,
    setSelectedBeds2,
    currency2,
    setCurrency2,
    percent2,
    setPercent2,
    isDormShow2,
    setIsDormShow2,
    titleName2,
    setTitleName2,
  } = usePricingContext();

  return (
    <div
      className={[
        styles.divbreakdownWrapperhasRate,
        className,
        isSticky ? styles.sticky : "",
      ].join(" ")}
    >
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
            <a className={styles.a}>0</a> {/* Updated with context value */}
          </div>
        </div>
      </div>
      <section className={styles.divroomRates}>
        {isDormShow1 && (
          <div className={styles.roomPriceNightParent}>
            <div className={styles.roomPriceNight}>
              <div className={styles.doubleBedPrivate}>{doomsName}</div>
              <a className={styles.room}>
                {selectedBeds1} {selectedBeds1 === 1 ? "bed" : "beds"}
              </a>
              <div className={styles.x1Night}>
                {currency1} {maxPrice1} x 1 Night
              </div>{" "}
              {/* Updated with context values */}
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent}>
                <div className={styles.divtagTextWrapper}>
                  <div className={styles.divtagText}>
                    <b className={styles.b}>-{percent1}%</b>{" "}
                    {/* Updated with context value */}
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div
                    className={styles.frameFrame}
                    onClick={() => setIsDormShow1(false)}
                  >
                    <img
                      className={styles.frameIcon2}
                      loading="lazy"
                      alt=""
                      src="/frame-21.svg"
                    />
                  </div>
                  <div className={styles.parent}>
                    <a className={styles.a1}>
                      {currency1} {discountPrice1}
                    </a>{" "}
                    {/* Updated with context values */}
                    <div className={styles.divdiscountPricestrikethrou}>
                      <div className={styles.div}>
                        {currency1} {maxPrice1}
                      </div>{" "}
                      {/* Updated with context values */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className={styles.divrateParent}> */}
        {isDormShow2 && (
         <div
         className={styles.divrate}
         style={isDormShow1 ? { borderTop: '2px solid #727477' } : {}}
       >
            <div className={styles.roomPriceNightWrapper}>
              <div className={styles.roomPriceNight1}>
                <div className={styles.basicDoubleBed}>{titleName2}</div>
                <div className={styles.room1}>
                  {selectedBeds2} {selectedBeds2 === 1 ? "room" : "rooms"}
                </div>
                <div className={styles.x1Night1}>
                  {" "}
                  {currency2} {maxPrice2} x 1 Night
                </div>
                <div className={styles.divtagTextContainer}>
                  <div className={styles.divtagText1}>
                    <b className={styles.b}>-{percent2}%</b>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div
                className={styles.frameWrapper1}
                onClick={() => setIsDormShow2(false)}
              >
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame-31.svg"
                />
              </div>
              <div className={styles.group}>
                <div className={styles.div1}>
                  {" "}
                  {currency2} {discountPrice2}
                </div>
                <div className={styles.divdiscountPricestrikethrou1}>
                  <div className={styles.div2}>
                    {currency2} {maxPrice2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* </div> */}
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent3}>
          {(isDormShow1 || isDormShow2) && (
            <div className={styles.totalPayableParent}>
              <div className={styles.totalPayable}>
                <div className={styles.total}>Total</div>
                <div className={styles.payableNow}>Payable Now</div>
              </div>
              <div className={styles.parent1}>
                <div className={styles.div5}>
                  {currency1}{" "}
                  {isDormShow1 && !isDormShow2
                    ? discountPrice1
                    : !isDormShow1 && isDormShow2
                    ? discountPrice2
                    : isDormShow1 && isDormShow2
                    ? discountPrice1 + discountPrice2
                    : 0}
                </div>{" "}
                {/* Example static value */}
                <div className={styles.wrapper}>
                  <div className={styles.div6}>{currency1} 6.40</div>{" "}
                  {/* Example static value */}
                </div>
              </div>
            </div>
          )}
          {isDormShow1 || isDormShow2 ? (
            <button className={styles.buttonbtnContentfullWidth}>
              <b className={styles.bookNow}>Book Now</b>
              <div className={styles.frameWrapper3}>
                <img className={styles.frameIcon5} alt="" src="/frame-51.svg" />
              </div>
            </button>
          ) : (
            <div className="flex gap-8 justify-center items-center ml-[40px] mt-[20px]">
              <div>
                <div className="font-bolder text-1xl">From</div>
                <div className="font-bold text-4xl">{currency1 || currency2} 500</div>
              </div>
              <button className={styles.buttonbtnContentfullWidth}>
                <b className={styles.bookNow}>Choose a Room</b>
              </button>
            </div>
          )}
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
        {(!isDormShow1 && !isDormShow2) && 
        <div className="mt-[-18px] flex flex-col gap-2">
          <div className="flex  items-center gap-2">
            <div>
              <MdOutlineWatchLater color="#000" />
            </div>
            <div>Booking only takes 2 minutes</div>
          </div>
          <div className="flex  items-center gap-2">
            <div>
              <GiConfirmed color="#374151"/>
            </div>
            <div>Instant Confirmation</div>
          </div>
        </div>
        }
      </section>
    </div>
  );
};

export default FinalPricingContainer;
