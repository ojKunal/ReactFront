import { FunctionComponent, useEffect, useState } from "react";
import { usePricingContext } from "./PricingContext"; // Adjust path as necessary
import styles from "./PricingFinalBreakdown.module.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useHotelFunctions } from "./functions";
import DateRangePickerComponent from "./DateRangePeaker";

export type DivbreakdownWrapperhasRateType = {
  className?: string;
  roomsData?: any;
};

const FinalPricingContainer: FunctionComponent<
  DivbreakdownWrapperhasRateType
> = ({ className = "", roomsData }) => {
  // Using the PricingContext values
  const [isSticky, setIsSticky] = useState(false);
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 700 && scrollTop < 3500) {
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
  const increment = (e:any) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const decrement = (e:any) => {
    e.stopPropagation();
    if (count > 0) setCount(count - 1);
  };

  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };
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
    addedHotels,
    activeHotels,
    setActiveHotels,
    bedCounts,
    setBedCounts,
    activeHotels1,
    setActiveHotels1,
    bedCounts1,
    setBedCounts1,
  } = usePricingContext();
  const { handleAddHotel, handleBedsIncrement, handleBedsDecrement } =
    useHotelFunctions();

  if (Array.isArray(roomsData)) console.log("Rooms Data Available");
  else console.log("Not Abailable");

  if (roomsData?.rooms) {
    // If roomsData.rooms is an object with individual rooms as keys
    const roomArray = Object.values(roomsData.rooms);
    console.log("Rooms Array:", roomArray);

    roomArray.forEach((room, index) => {
      console.log(`Room ${index + 1}:`, room);
    });
  } else {
    console.log("Rooms data is not available or not in the expected format.");
  }
  // console.log("RoomData: " + JSON.stringify(roomsData?.rooms));
  const handleRemoveHotel = (hotelId: number) => {
    // Create a new copy of activeHotels without the specific hotelId
    const { [hotelId]: _, ...updatedActiveHotels } = activeHotels;

    // Update the state with the new activeHotels
    setActiveHotels(updatedActiveHotels);
  };
  const handleRemoveHotel1 = (hotelId1: number) => {
    // Create a new copy of activeHotels without the specific hotelId
    const { [hotelId1]: _, ...updatedActiveHotels1 } = activeHotels1;

    // Update the state with the new activeHotels
    setActiveHotels1(updatedActiveHotels1);
  };

  // Calculating total Amount //
  let totalAmount = 0;
  Object.keys(activeHotels).forEach((hotelId) => {
    let hotel = roomsData?.rooms?.dorms?.find(
      (room: any) => room.id === Number(hotelId)
    );

    if (hotel) {
      const averageValue = parseFloat(
        hotel.averagePricePerNight[0]?.price.value
      );
      const bedCount = bedCounts?.[Number(hotelId)] || 0;
      totalAmount += averageValue * bedCount;
    }
  });

  Object.keys(activeHotels1).forEach((hotelId1) => {
    let hotel1 = roomsData?.rooms?.privates?.find(
      (room: any) => room.id === Number(hotelId1)
    );

    if (hotel1) {
      const averageValue1 = parseFloat(
        hotel1.averagePricePerNight[0]?.price.value
      );
      const bedCount1 = bedCounts1?.[Number(hotelId1)] || 0;
      totalAmount += averageValue1 * bedCount1;
    }
  });

  // Format totalAmount to two decimal places
  let formattedTotalAmount = totalAmount.toFixed(2);

  console.log(`Total Amount: INR ${formattedTotalAmount}`);

  return (
    <div
      className={[
        styles.divbreakdownWrapperhasRate,
        className,
        isSticky ? styles.sticky : "",
      ].join(" ")}
    >
      <div className="flex-col">
        <DateRangePickerComponent/>
     <div
      className={styles.inputnativeInput1}
      style=
      {{ border: "1px solid black",
         marginTop: '8px', 
         paddingRight: '8px',
         cursor:"pointer",
         boxShadow: isEditing ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
         transform: isEditing ? 'scale(1.1)' : 'scale(1)',}}
      onClick={() => setIsEditing(true)}
      onKeyPress={handleKeyPress}
      tabIndex={0} // Allows the div to be focusable and handle keypress events
    >
      <div className={styles.frameContainer}>
        <img
          className={styles.frameIcon1}
          loading="lazy"
          alt=""
          src="/frame-11.svg"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,gap:"6px", }}>
        {isEditing ? (
          <>
            <button onClick={decrement} className={styles.changeButton}>-</button>
            <span style={{fontSize:"25px"}} className={styles.a}>{count}</span>
            <button onClick={increment} className={styles.changeButton}>+</button>
          </>
        ) : (
          <>
            <span className={styles.guests}>Guests</span>
            <span className={styles.a}>{count}</span>
          </>
        )}
      </div>
    </div>
      </div>
      {/* <div className={styles.divinlineFormsmall}>
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
            <a className={styles.a}>0</a> 
          </div>
        </div>
      </div> */}

      <section className={styles.divroomRates}>
        {roomsData?.rooms &&
          Object.keys(activeHotels).map((hotelId) => {
            console.log("Mapping hotelId:", hotelId);
            let hotel = null;

            // Iterate over both dorms and privates arrays
            if (roomsData.rooms.dorms) {
              hotel = roomsData.rooms.dorms.find(
                (room: any) => room.id === Number(hotelId)
              );
            }

            if (!hotel) {
              console.log("No data found for hotelId:", hotelId);
              return null; // Skip rendering if no hotel data found
            }
            const maxValue = hotel.totalPrice[0]?.price.value;
            const averageValue = hotel.averagePricePerNight[0]?.price.value;
            const currency = hotel.averagePricePerNight[0]?.price.currency;
            const bedCount = bedCounts?.[Number(hotelId)] || 0;
            // Calculate prices
            const { name } = hotel;
            console.log("Hotel: " + JSON.stringify(hotel));
            const discountPrice =
              ((maxValue * bedCounts[Number(hotelId)] -
                averageValue * bedCounts[Number(hotelId)]) *
                100) /
              (maxValue * bedCounts[Number(hotelId)]);
            // const currency = "$"; // Update based on your currency settings

            console.log("Rendering hotel:", name);

            return (
              <>
                <div
                  key={hotelId}
                  className={styles.roomPriceNightParent}
                  onClick={() => {
                    console.log("Hotel clicked:", name);
                  }}
                >
                  <div className={styles.roomPriceNight}>
                    <div className={styles.doubleBedPrivate}>{name}</div>
                    <a className={styles.room}>
                      {bedCounts[Number(hotelId)] || 0}{" "}
                      {bedCounts[Number(hotelId)] === 1 ? "bed" : "beds"}
                    </a>
                    <div className={styles.x1Night}>
                      {currency} {averageValue * bedCounts[Number(hotelId)]} x 1
                      Night
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent}>
                      <div className={styles.divtagTextWrapper}>
                        <div className={styles.divtagText}>
                          <b className={styles.b}>-{discountPrice}%</b>
                        </div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div
                          className={styles.frameFrame}
                          onClick={() => handleRemoveHotel(Number(hotelId))}
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
                            {currency}{" "}
                            {averageValue * bedCounts[Number(hotelId)]}
                          </a>
                          <div className={styles.divdiscountPricestrikethrou}>
                            <div className={styles.div}>
                              {currency} {maxValue * bedCounts[Number(hotelId)]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    width: "100%",
                    borderBottom: "2px solid gray",
                    margin: "1px 0", // Optional: add margin for spacing
                    height: "1px", // Ensure height for the divider
                  }}
                ></div>
              </>
            );
          })}
        {roomsData?.rooms &&
          Object.keys(activeHotels1).map((hotelId1) => {
            console.log("Mapping hotelId:", hotelId1);
            let hotel1 = null;

            // Iterate over privates arrays
            if (roomsData.rooms.privates) {
              hotel1 = roomsData.rooms.privates.find(
                (room: any) => room.id === Number(hotelId1)
              );
            }

            if (!hotel1) {
              console.log("No data found for hotelId1:", hotelId1);
              return null; // Skip rendering if no hotel data found
            }
            const maxValue1 = hotel1.totalPrice[0]?.price.value;
            const averageValue1 = hotel1.averagePricePerNight[0]?.price.value;
            const currency1 = hotel1.averagePricePerNight[0]?.price.currency;
            const bedCount1 = bedCounts1?.[Number(hotelId1)] || 0;
            // Calculate prices
            const name1 = hotel1.name;
            console.log("Hotel1: " + JSON.stringify(hotel1));
            const discountPrice1 =
              ((maxValue1 * bedCounts1[Number(hotelId1)] -
                averageValue1 * bedCounts1[Number(hotelId1)]) *
                100) /
              (maxValue1 * bedCounts1[Number(hotelId1)]);
            // const currency = "$"; // Update based on your currency settings

            console.log("Rendering hotel:", name1);

            return (
              <>
                <div
                  key={hotelId1}
                  className={styles.roomPriceNightParent}
                  // style={{ borderBottom: '2px solid red',}}
                  onClick={() => {
                    console.log("Hotel clicked:", name1);
                  }}
                >
                  <div className={styles.roomPriceNight}>
                    <div className={styles.doubleBedPrivate}>{name1}</div>
                    <a className={styles.room}>
                      {bedCounts1[Number(hotelId1)] || 0}{" "}
                      {bedCounts1[Number(hotelId1)] === 1 ? "room" : "rooms"}
                    </a>
                    <div className={styles.x1Night}>
                      {currency1} {averageValue1 * bedCounts1[Number(hotelId1)]}{" "}
                      x 1 Night
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent}>
                      <div className={styles.divtagTextWrapper}>
                        <div className={styles.divtagText}>
                          <b className={styles.b}>-{discountPrice1}%</b>
                        </div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div
                          className={styles.frameFrame}
                          onClick={() => handleRemoveHotel1(Number(hotelId1))}
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
                            {currency1}{" "}
                            {averageValue1 * bedCounts1[Number(hotelId1)]}
                          </a>
                          <div className={styles.divdiscountPricestrikethrou}>
                            <div className={styles.div}>
                              {currency1}{" "}
                              {maxValue1 * bedCounts1[Number(hotelId1)]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    width: "100%",
                    borderBottom: "2px solid gray",
                    margin: "1px 0",
                    height: "1px",
                  }}
                ></div>
              </>
            );
          })}
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent3}>
          {(Object.keys(activeHotels).length > 0 ||
            Object.keys(activeHotels1).length > 0) && (
            <div className={styles.totalPayableParent}>
              <div className={styles.totalPayable}>
                <div className={styles.total}>Total</div>
                <div className={styles.payableNow} style={{ color: "green" }}>
                  Payable Now
                </div>
              </div>
              <div className={styles.parent1}>
                <div className={styles.div5}>
                  {currency1} {formattedTotalAmount}
                </div>{" "}
                {/* Example static value */}
                <div className={styles.wrapper}>
                  <div className={styles.div6} style={{ color: "green" }}>
                    {currency1} {formattedTotalAmount}
                  </div>{" "}
                  {/* Example static value */}
                </div>
              </div>
            </div>
          )}
          {Object.keys(activeHotels).length > 0 ||
          Object.keys(activeHotels1).length > 0 ? (
            <button className={styles.buttonbtnContentfullWidth}>
              <b className={styles.bookNow}>Book Now</b>
              <div className={styles.frameWrapper3}>
                <img
                  className={styles.frameIcon5}
                  alt="Book Now Icon"
                  src="/frame-51.svg"
                />
              </div>
            </button>
          ) : (
            <div className="flex gap-8 justify-center items-center ml-[40px] mt-[20px]">
              <div>
                <div className="font-bolder text-1xl">From</div>
                <div className="font-bold text-4xl">
                  {currency1 || currency2} 500
                </div>
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
        {Object.keys(activeHotels).length < 1 &&
          Object.keys(activeHotels1).length < 1 && (
            <div className="mt-[-18px] flex flex-col gap-2">
              <div className="flex  items-center gap-2">
                <div>
                  <MdOutlineWatchLater color="#000" />
                </div>
                <div>Booking only takes 2 minutes</div>
              </div>
              <div className="flex  items-center gap-2">
                <div>
                  <GiConfirmed color="#374151" />
                </div>
                <div>Instant Confirmation</div>
              </div>
            </div>
          )}
      </section>
    </div>
  );
};

export default FinalPricingContainer;
