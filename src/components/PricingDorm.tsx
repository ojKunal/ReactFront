import React, { useEffect, useState } from "react";
import { usePricingContext } from "./PricingContext"; // Adjust the import path as necessary
import styles from "./PricingDorm.module.css";
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { useHotelFunctions } from "./functions";
export type DivroomContainer1Type = {
  className?: string;
  rooms_dorms?: any;
  key?: number;
  activeHotels?: Record<number, boolean>;
  setActiveHotels?: React.Dispatch<
    React.SetStateAction<Record<number, boolean>>
  >;
  bedCounts?: Record<number, number>;
  setBedCounts?: React.Dispatch<React.SetStateAction<Record<number, number>>>;
};

const DormroomContainer: React.FC<DivroomContainer1Type> = ({
  className = "",
  rooms_dorms,
  key,
  activeHotels,
  setActiveHotels,
  bedCounts,
  setBedCounts,
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
    selectedDormsData, // Array to store selected dorms data
    setSelectedDormsData, // Function to update selected dorms data
  } = usePricingContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedItemIndex, setClickedItemIndex] = useState<number | null>(null);
  const { handleAddHotel, handleBedsIncrement, handleBedsDecrement } = useHotelFunctions();

  // const validRoomsDorms = Array.isArray(rooms_dorms) ? rooms_dorms : [];

  // const [activeHotels, setActiveHotels] = useState<boolean[]>(validRoomsDorms.map(() => false));
  // const [selectedBeds, setSelectedBeds] = useState<number[]>(validRoomsDorms.map(() => 0));

  // const handleDormsPrice = (index: number) => {
  //   const updatedHotels = [...activeHotels];
  //   updatedHotels[index] = true;
  //   setActiveHotels(updatedHotels);
  // };

  // const handleBedsIncrement = (index: number) => {
  //   const updatedBeds = [...selectedBeds];
  //   if (validRoomsDorms[index] && updatedBeds[index] < validRoomsDorms[index].totalBedsAvailable) {
  //     updatedBeds[index] += 1;
  //     setSelectedBeds(updatedBeds);
  //   }
  // };

  // const handleBedsDecrement = (index: number) => {
  //   const updatedBeds = [...selectedBeds];
  //   if (validRoomsDorms[index] && updatedBeds[index] > 0) {
  //     updatedBeds[index] -= 1;
  //     setSelectedBeds(updatedBeds);
  //   }
  //   if (updatedBeds[index] === 0) {
  //     const updatedHotels = [...activeHotels];
  //     updatedHotels[index] = false;
  //     setActiveHotels(updatedHotels);
  //   }
  // };

  // const handleDormsPrice = () => {
  //   // setClickedItemIndex(index);
  //   setSelectedBeds1(1);
  //   setIsDormShow1(true);
  // };

  // useEffect(() => {
  //   if (rooms_dorms?.images) {
  //     const interval = setInterval(() => {
  //       setCurrentIndex(
  //         (prevIndex) => (prevIndex + 1) % rooms_dorms.images.length
  //       );
  //     }, 2500);

  //     return () => clearInterval(interval);
  //   } else {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
  //     }, 2500); // Change image every 2 seconds

  //     return () => clearInterval(interval);
  //   }
  // }, [rooms_dorms]);

  useEffect(() => {
    if (
      rooms_dorms &&
      rooms_dorms.totalPrice &&
      rooms_dorms.totalPrice[0].price &&
      rooms_dorms.totalPrice[0].price.value
    ) {
      const newMaxPrice = rooms_dorms.totalPrice[0].price.value * selectedBeds1;
      setMaxPrice1(newMaxPrice);
      setCurrency1(rooms_dorms.totalPrice[0].price.currency);
    }
    if (
      rooms_dorms &&
      rooms_dorms.averagePricePerNight &&
      rooms_dorms.averagePricePerNight[0] &&
      rooms_dorms.averagePricePerNight[0].price
    ) {
      setDiscountPrice1(
        rooms_dorms.averagePricePerNight[0].price.value * selectedBeds1
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
    const titleName = rooms_dorms ? rooms_dorms.name : "Basic 4 Bed Male Dorm";
    setDoomsName(titleName);
  }, [rooms_dorms, setDoomsName]);

  const images = rooms_dorms?.images && rooms_dorms.images.length > 0 && rooms_dorms.images || dummyImages;

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
            if (rooms_dorms?.images && rooms_dorms.images.length > 0) {
              imageUrl = `https://${image.prefix}${image.suffix}`;
            } else {
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
                {rooms_dorms ? (
                  <div className={styles.standard6Bed}>{rooms_dorms.name}</div>
                ) : (
                  <div className={styles.standard6Bed}>
                    Basic 4 Bed Male Dorm
                  </div>
                )}
                <div className={styles.detailsContainerParent}>
                  <div className={styles.detailsContainer}>
                    <div className={styles.divbody2RegroomDetailsco}>
                      {rooms_dorms ? (
                        <div className={styles.bedMixedDorm}>
                          {rooms_dorms.description}
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
                      {rooms_dorms && rooms_dorms.capacity ? (
                        <div className={styles.sleeps6Wrapper}>
                          <a className={styles.sleeps6}>
                            {" "}
                            Sleeps {rooms_dorms.capacity}
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
                  {rooms_dorms?.averagePricePerNight?.[0]?.price ? (
                    <a className={styles.a}>
                      {rooms_dorms.averagePricePerNight[0].price.currency}{" "}
                      {rooms_dorms.averagePricePerNight[0].price.value}
                    </a>
                  ) : (
                    <a className={styles.a}>INR 500</a>
                  )}
                  <div className={styles.divtagTextParent}>
                    <div className={styles.divtagText1}>
                      <a className={styles.a1}>-{percent1}%</a>
                    </div>
                    <div className={styles.spanpriceStrikethroughbodyWrapper}>
                      <div className={styles.spanpriceStrikethroughbody}>
                        {rooms_dorms && rooms_dorms.totalPrice?.[0]?.price ? (
                          <a className={styles.a2}>
                            {rooms_dorms.totalPrice[0].price.currency}{" "}
                            {rooms_dorms.totalPrice[0].price.value}
                          </a>
                        ) : (
                          <a className={styles.a}>INR 500</a>
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
              {activeHotels?.[rooms_dorms?.id] && (
                  <div className={styles.divcounterButtonguestsCounParent}>
                    <div className={styles.divcounterButtonguestsCoun}>
                      <div
                        className={styles.counterButtons}
                        onClick={() => (
                          handleBedsDecrement(rooms_dorms?.id),
                          console.log("Decrement: " + bedCounts)
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
                        {bedCounts?.[rooms_dorms?.id]}
                      </a>
                      <div
                        className={styles.counterButtons1}
                        onClick={() => (
                          handleBedsIncrement(
                            rooms_dorms?.id,
                            rooms_dorms?.totalBedsAvailable
                          ),
                          console.log(
                            "Increment: " + JSON.stringify(bedCounts)
                          ),
                          console.log(
                            "Total Beds for: " +
                              rooms_dorms?.id +
                              "is " +
                              rooms_dorms?.totalBedsAvailable
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
                        {bedCounts?.[rooms_dorms?.id]} Bed
                      </a>
                    </div>
                  </div>
                )}
              {rooms_dorms && !activeHotels?.[rooms_dorms?.id] && handleAddHotel && (
                <button
                  className={styles.buttonbtnContent}
                  onClick={() => (
                    handleAddHotel(rooms_dorms?.id),
                    console.log("AKahs: " + rooms_dorms?.id)
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
              {!rooms_dorms &&
                <div>
                   <a className={styles.add} style={{color:"red"}}>SOLD OUT</a>
                </div>
              }
            </div>
          </div>
          <div className={styles.divdivider} />
        </div>
        {/* <div className={styles.rateContainer}>
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
        </div> */}
      </div>
    </div>
  );
};

export default DormroomContainer;
