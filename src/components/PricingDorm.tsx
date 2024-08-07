import React, { useEffect, useState } from "react";
import { usePricingContext } from "./PricingContext"; // Adjust the import path as necessary
import styles from "./PricingDorm.module.css";
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import { PiCaretDoubleRightBold } from "react-icons/pi";

export type DivroomContainer1Type = {
  className?: string;
  rooms_dorms?: any;
};

const DormroomContainer: React.FC<DivroomContainer1Type> = ({
  className = "",
  rooms_dorms,
}) => {
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
    setDoomsName,
  } = usePricingContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBedsIncrement = () => {
    if (
      rooms_dorms &&
      rooms_dorms[0] &&
      selectedBeds1 < rooms_dorms[0].totalBedsAvailable
    ) {
      setSelectedBeds1(selectedBeds1 + 1);
    }
  };

  const handleBedsDecrement = () => {
    if (rooms_dorms && rooms_dorms[0] && selectedBeds1 > 0) {
      setSelectedBeds1(selectedBeds1 - 1);
    }
    if (selectedBeds1 === 1) {
      setIsDormShow1(false);
    }
  };

  const handleDormsPrice = () => {
    setSelectedBeds1(1);
    setIsDormShow1(true);
  };

  useEffect(() => {
    if (rooms_dorms && rooms_dorms[0]?.images) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % rooms_dorms[0].images.length
        );
      }, 2500); // Change image every 2 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
    else {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % dummyImages.length
        );
      }, 2500); // Change image every 2 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [rooms_dorms]);

  useEffect(() => {
    if (
      rooms_dorms &&
      rooms_dorms[0] &&
      rooms_dorms[0].totalPrice &&
      rooms_dorms[0].totalPrice[0].price &&
      rooms_dorms[0].totalPrice[0].price.value
    ) {
      const newMaxPrice =
        rooms_dorms[0].totalPrice[0].price.value * selectedBeds1;
      setMaxPrice1(newMaxPrice);
      setCurrency1(rooms_dorms[0].totalPrice[0].price.currency);
    }
    if (
      rooms_dorms &&
      rooms_dorms[0] &&
      rooms_dorms[0].averagePricePerNight &&
      rooms_dorms[0].averagePricePerNight[0] &&
      rooms_dorms[0].averagePricePerNight[0].price
    ) {
      setDiscountPrice1(
        rooms_dorms[0].averagePricePerNight[0].price.value * selectedBeds1
      );
    }
  }, [selectedBeds1, rooms_dorms]);

  useEffect(() => {
    if (maxPrice1 > 0) {
      const newPercent = ((maxPrice1 - discountPrice1) / maxPrice1) * 100;
      setPercent1(newPercent);
    }
  }, [maxPrice1, discountPrice1]);

  const dummyImages = [
    "/imgactiveslidevlazyimagevlazyimageloaded@2x.png",
    "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/320257/nwr6wlojrgmyxhqibvbh",
    "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/319841/kqedepjewqf65q80ihan",
  ];

  useEffect(() => {
    const titleName =
      rooms_dorms && rooms_dorms[0]
        ? rooms_dorms[0].name
        : "Basic 4 Bed Male Dorm";
    setDoomsName(titleName);
  }, [rooms_dorms, setDoomsName]);

  const images = rooms_dorms?.[0]?.images || dummyImages;

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={[styles.divroomContainer, className].join(" ")}>
      <section className={styles.divcarouselParent}>
        <div
          className={styles.divcarousel}
          style={{ backgroundColor: "", width: "80px" }}
        >
          <button
            className={`${styles.carouselButton} ${styles.left}`}
            onClick={goToPrevious}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "1000",
              background: "transparent",
              border: "none",
            }}
          >
            <PiCaretDoubleLeftBold size={30} />
          </button>
          <button
            className={`${styles.carouselButton} ${styles.right}`}
            onClick={goToNext}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "1000",
              background: "transparent",
              border: "none",
            }}
          >
            <PiCaretDoubleRightBold size={30} />
          </button>
          {images.map((image: any, index: any) => {
            let imageUrl;
            if(rooms_dorms?.[0]?.images) {
              imageUrl = `https://${image.prefix}${image.suffix}`;
            }
            else {
              imageUrl = image;
            }
            console.log("url is : ", imageUrl);
            return (
              <img
                key={index}
                className={`${styles.imgactiveSlidevLazyImageIcon} ${
                  index === currentIndex ? styles.active : ""
                }`}
                loading="lazy"
                alt=""
                src={imageUrl}
              />
            );
          })}

          <div style={{ width: "100%" }}>
            <div
              className={styles.dotsContainer}
              style={{
                position: "absolute",
                bottom: "6px",
                left: "0",
                right: "0",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none", // To ensure clicks on the dots are not blocked
              }}
            >
              {images.map((_: any, index: any) => (
                <div
                  key={index}
                  className={`${styles.divsliderDot} ${
                    index === currentIndex ? styles.divsliderDotactive : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    cursor: "pointer",
                    pointerEvents: "auto", // To ensure clicks on the dots are functional
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.titleContainerWrapper}>
              <div className={styles.titleContainer}>
                {rooms_dorms && rooms_dorms[0] ? (
                  <div className={styles.standard6Bed}>
                    {rooms_dorms[0].name}
                  </div>
                ) : (
                  <div className={styles.standard6Bed}>
                    Basic 4 Bed Male Dorm
                  </div>
                )}
                <div className={styles.detailsContainerParent}>
                  <div className={styles.detailsContainer}>
                    <div className={styles.divbody2RegroomDetailsco}>
                      {rooms_dorms && rooms_dorms[0] ? (
                        <div className={styles.bedMixedDorm}>
                          {rooms_dorms[0].description}
                        </div>
                      ) : (
                        <div className={styles.bedMixedDorm}>
                          6 Bed Mixed Dorm without Air Conditioning, En suite
                          Washroom, Digital Lockers, Reading Light, Bed Fans,
                          Cloth Hanger, International Sockets, Key Card Access.
                        </div>
                      )}
                    </div>
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.frameIcon}
                        loading="lazy"
                        alt=""
                        src="/frame2.svg"
                      />
                      {rooms_dorms &&
                      rooms_dorms[0] &&
                      rooms_dorms[0].capacity ? (
                        <div className={styles.sleeps6Wrapper}>
                          <a className={styles.sleeps6}>
                            {" "}
                            Sleeps {rooms_dorms[0].capacity}
                          </a>
                        </div>
                      ) : (
                        <div className={styles.sleeps6Wrapper}>
                          <a className={styles.sleeps6}> Sleeps 6</a>
                        </div>
                      )}
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
                  {rooms_dorms?.[0]?.averagePricePerNight?.[0]?.price ? (
                    <a className={styles.a}>
                      {rooms_dorms[0].averagePricePerNight[0].price.currency}{" "}
                      {rooms_dorms[0].averagePricePerNight[0].price.value}
                    </a>
                  ) : (
                    <a className={styles.a}>{currency1} 0</a>
                  )}
                  <div className={styles.divtagTextParent}>
                    <div className={styles.divtagText1}>
                      <a className={styles.a1}>-{percent1}%</a>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyWrapper}>
                      <div className={styles.spanpriceStrikethroughbody}>
                        {rooms_dorms?.[0]?.totalPrice?.[0]?.price ? (
                          <a className={styles.a2}>
                            {rooms_dorms[0].totalPrice[0].price.currency}{" "}
                            {rooms_dorms[0].totalPrice[0].price.value}
                          </a>
                        ) : (
                          <a className={styles.a}>{currency1} 0</a>
                        )}
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
              {isDormShow1 && (
                <div className={styles.divcounterButtonguestsCounParent}>
                  <div className={styles.divcounterButtonguestsCoun}>
                    <div
                      className={styles.counterButtons}
                      onClick={() => handleBedsDecrement()}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className={styles.emptyCounterButton}
                        loading="lazy"
                        alt=""
                        src="/frame-4.svg"
                      />
                    </div>
                    <a className={styles.guestCount}>{selectedBeds1}</a>
                    <div
                      className={styles.counterButtons1}
                      onClick={() => handleBedsIncrement()}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className={styles.frameIcon3}
                        loading="lazy"
                        alt=""
                        src="/frame-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.bedWrapper}>
                    <a className={styles.bed}>{selectedBeds1} Bed</a>
                  </div>
                </div>
              )}
              {!isDormShow1 && (
                <button
                  className={styles.buttonbtnContent}
                  onClick={handleDormsPrice}
                >
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
              )}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DormroomContainer;
