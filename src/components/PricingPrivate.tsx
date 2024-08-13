import React, { useEffect, useState } from "react";
import { usePricingContext } from "./PricingContext"; // Adjust the path to your PricingContext file
import styles from "./PricingDorm.module.css";
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { useHotelFunctions } from "./functions";

export type PrivateroomContainerType = {
  className?: string;
  rooms_private: any;
  key?: number;
  activeHotels1?: Record<number, boolean>;
  setActiveHotels1?: React.Dispatch<
    React.SetStateAction<Record<number, boolean>>
  >;
  bedCounts1?: Record<number, number>;
  setBedCounts1?: React.Dispatch<React.SetStateAction<Record<number, number>>>;
};

const PrivateroomContainer: React.FC<PrivateroomContainerType> = ({
  className = "",
  rooms_private,
  key,
  activeHotels1,
  setActiveHotels1,
  bedCounts1,
  setBedCounts1,
}) => {
  const {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const { handleAddHotel1, handleBedsIncrement1, handleBedsDecrement1 } =
    useHotelFunctions();

  // const handleRoomsIncrement = () => {
  //   if (

  //    rooms_private &&
  //     selectedBeds2 <rooms_private.totalBedsAvailable
  //   ) {
  //     setSelectedBeds2(selectedBeds2 + 1);
  //   }
  // };
  // console.log("currency is", currency2);
  // const handleRoomsDecrement = () => {
  //   if (rooms_private && selectedBeds2 > 0) {
  //     setSelectedBeds2(selectedBeds2 - 1);
  //   }
  //   if (selectedBeds2 === 1) {
  //     setIsDormShow2(false);
  //   }
  // };

  // const handleDormsPrice = () => {
  //   setSelectedBeds2(1);
  //   setIsDormShow2(true);
  // };

  useEffect(() => {
    if (
      rooms_private &&
      rooms_private.totalPrice &&
      rooms_private.totalPrice[0].price &&
      rooms_private.totalPrice[0].price.value
    ) {
      const newMaxPrice =
        rooms_private.totalPrice[0].price.value * selectedBeds2;
      setMaxPrice2(newMaxPrice);
      setCurrency2(rooms_private.totalPrice[0].price.currency);
    }
    if (
      rooms_private &&
      rooms_private.averagePricePerNight &&
      rooms_private.averagePricePerNight[0] &&
      rooms_private.averagePricePerNight[0].price
    ) {
      setDiscountPrice2(
        rooms_private.averagePricePerNight[0].price.value * selectedBeds2
      );
    }
  }, [selectedBeds2, rooms_private]);

  useEffect(() => {
    if (maxPrice2 > 0) {
      const newPercent = ((maxPrice2 - discountPrice2) / maxPrice2) * 100;
      setPercent2(newPercent);
    }
  }, [maxPrice2, discountPrice2]);

  const dummyImages = [
    "/imgactiveslidevlazyimagevlazyimageloaded@2x.png",
    "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/320257/nwr6wlojrgmyxhqibvbh",
    "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/319841/kqedepjewqf65q80ihan",
  ];

  // useEffect(() => {
  //   if (rooms_private?.images) {
  //     const interval = setInterval(() => {
  //       setCurrentIndex(
  //         (prevIndex) => (prevIndex + 1) % rooms_private.images.length
  //       );
  //     }, 2500);

  //     return () => clearInterval(interval);
  //   } else {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
  //     }, 2500);

  //     return () => clearInterval(interval);
  //   }
  // }, [rooms_private]);

  useEffect(() => {
    const titleName = rooms_private
      ? rooms_private.name
      : "Basic Double Bed Private Ensuite";
    setTitleName2(titleName);
  }, [rooms_private, setTitleName2]);

  const images =
    rooms_private?.images && rooms_private.images.length > 0
      ? rooms_private.images
      : dummyImages;

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
            <PiCaretDoubleRightBold size={30}/>
          </button>
          {images.map((image: any, index: any) => {
            let imageUrl;
            if (rooms_private?.images && rooms_private.images.length > 0) {
              imageUrl = `https://${image.prefix}${image.suffix}`;
              console.log("image url is ", imageUrl);
            } else {
              imageUrl = image;
              // console.log("image url is ", index, " ", image);
            }
            // console.log("url is : ", imageUrl);
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

          {/* {images.map((image: any, index: any) => {
                let imageUrl;
                if(rooms_private?.images && rooms_private.images.length > 0) {
                  imageUrl = `https://${image.prefix}${image.suffix}`;
                }
                else {
                  imageUrl = image;
                }
                // console.log("url is : ", imageUrl);
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
              })} */}
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
                pointerEvents: "none",
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
                    pointerEvents: "auto",
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
                {rooms_private ? (
                  <div className={styles.standard6Bed}>
                    {rooms_private.name}
                  </div>
                ) : (
                  <div className={styles.standard6Bed}>
                    Basic Double Bed Private Ensuite
                  </div>
                )}
                <div className={styles.detailsContainerParent}>
                  <div className={styles.detailsContainer}>
                    <div className={styles.divbody2RegroomDetailsco}>
                      {rooms_private ? (
                        <div className={styles.bedMixedDorm}>
                          {rooms_private.description}
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
                      {rooms_private && rooms_private.capacity ? (
                        <div className={styles.sleeps6Wrapper}>
                          <a className={styles.sleeps6}>
                            {" "}
                            Sleeps {rooms_private.capacity}
                          </a>
                        </div>
                      ) : (
                        <div className={styles.sleeps6Wrapper}>
                          <a className={styles.sleeps6}> Sleeps 2</a>
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
              <div className={styles.pricesArePer}>Prices are per room -</div>
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
                  {rooms_private?.averagePricePerNight?.[0]?.price ? (
                    <a className={styles.a}>
                      {rooms_private.averagePricePerNight[0].price.currency}{" "}
                      {rooms_private.averagePricePerNight[0].price.value}
                    </a>
                  ) : (
                    <a className={styles.a}>{currency2} 0</a>
                  )}
                  <div className={styles.divtagTextParent}>
                    <div className={styles.divtagText1}>
                      <a className={styles.a1}>-{percent2}%</a>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyWrapper}>
                      <div className={styles.spanpriceStrikethroughbody}>
                        {rooms_private?.totalPrice?.[0]?.price ? (
                          <a className={styles.a2}>
                            {rooms_private.totalPrice[0].price.currency}{" "}
                            {rooms_private.totalPrice[0].price.value}
                          </a>
                        ) : (
                          <a className={styles.a}>{currency2} 0</a>
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
              {activeHotels1?.[rooms_private?.id] && (
                <div className={styles.divcounterButtonguestsCounParent}>
                  <div className={styles.divcounterButtonguestsCoun}>
                    <div
                      className={styles.counterButtons}
                      onClick={() => (
                        handleBedsDecrement1(rooms_private?.id),
                        console.log("Decrement: " + bedCounts1)
                      )}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className={styles.emptyCounterButton}
                        loading="lazy"
                        alt=""
                        src="/frame-4.svg"
                      />
                    </div>
                    <a className={styles.guestCount}>
                      {bedCounts1?.[rooms_private?.id]}
                    </a>
                    <div
                      className={styles.counterButtons1}
                      onClick={() => (
                        handleBedsIncrement1(
                          rooms_private?.id,
                          rooms_private?.totalBedsAvailable
                        ),
                        console.log("Increment: " + JSON.stringify(bedCounts1)),
                        console.log(
                          "Total Beds for: " +
                            rooms_private?.id +
                            "is " +
                            rooms_private?.totalBedsAvailable
                        )
                      )}
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
                    <a className={styles.bed}>
                      {bedCounts1?.[rooms_private?.id]} Bed
                    </a>
                  </div>
                </div>
              )}
              {!activeHotels1?.[rooms_private?.id] && handleAddHotel1 && (
                <button
                  className={styles.buttonbtnContent}
                  onClick={() => (
                    handleAddHotel1(rooms_private?.id),
                    console.log("AKahs: " + rooms_private?.id)
                  )}
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
              {(!rooms_private) &&
                <div>
                   <a className={styles.add} style={{color:"red"}}>SOLD OUT</a>
                </div>
              }
              
            </div>
          </div>
          <div className={styles.divdivider} />
        </div>
      </div>
    </div>
  );
};

export default PrivateroomContainer;
