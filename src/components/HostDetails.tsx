import { FunctionComponent, useState, useContext, useEffect } from "react";
import Column from "./Column";
import styles from "./HostDetails.module.css";
import DormroomContainer from "../components/PricingDorm";
import PrivateroomContainer from "../components/PricingPrivate";
import { usePricingContext } from "./PricingContext";


export type HostDetailsType = {
  className?: string;
  data?: any;
  pricingData?: any;
};

const HostDetails: FunctionComponent<HostDetailsType> = ({
  className = "",
  data,
  pricingData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [length, setLength] = useState(5);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Using PricingContext
  const {
    setMaxPrice1,
    setDiscountPrice1,
    setSelectedBeds1,
    setCurrency1,
    setPercent1,
    setIsDormShow1,
    activeHotels,
    setActiveHotels,
    bedCounts,
    setBedCounts,
    activeHotels1,
    setActiveHotels1,
    bedCounts1,
    setBedCounts1
  } = usePricingContext();

  if (
    !setMaxPrice1 ||
    !setDiscountPrice1 ||
    !setSelectedBeds1 ||
    !setCurrency1 ||
    !setPercent1 ||
    !setIsDormShow1
  ) {
    throw new Error("PricingContext must be used within a PricingProvider");
  }

  console.log("final Pricing data is here", pricingData);

  const rooms_dorms1 = pricingData
    ? pricingData.rooms
      ? pricingData.rooms.dorms
      : [null]
    : {};
  const rooms_private1 = pricingData
    ? pricingData.rooms
      ? pricingData.rooms.privates
      : [null]
    : {};

  console.log("rooms_dorms are", rooms_dorms1);
  console.log("rooms_private are", rooms_private1);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggle1 = () => {
    if (length === 5) {
      setLength(facilitiesSummary.length);
    } else {
      setLength(5);
    }
  };

  const isTextLong = data?.overview.length > 250;
  const displayedText = isExpanded
    ? data?.overview
    : data?.overview.slice(0, 250);

  const facilitiesSummary = data?.facilitiesSummary || [];
  const midpoint = Math.ceil(facilitiesSummary.length / 2);

  // Spliting the array into two halves
  const firstHalf = facilitiesSummary.slice(0, midpoint);
  const secondHalf = facilitiesSummary.slice(midpoint);

  const buttonStyle = (isHovered: boolean) => ({
    backgroundColor: "red",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
  });

  const validRoomsDorms = Array.isArray(rooms_dorms1) ? rooms_dorms1 : [];
  const validRoomsDorms1 = Array.isArray(rooms_private1) ? rooms_private1 : [];
  // console.log("ValidateRoomDorms NEW : " + JSON.stringify(validRoomsDorms));
  // const [activeHotels, setActiveHotels] = useState<boolean[]>(
  //   validRoomsDorms.map(() => false)
  // );
  // const [selectedBeds, setSelectedBeds] = useState<number[]>(
  //   validRoomsDorms.map(() => 0)
  // );
 

  // const handleDormsPrice = (index: number) => {
  //   const updatedHotels = [...activeHotels];
  //   updatedHotels[index] = true;
  //   setActiveHotels(updatedHotels);
  // };

  // const handleAddHotel = (hotelId: number) => {
  //   setActiveHotels((prevActiveHotels) => {
  //     const updatedActiveHotels = { ...prevActiveHotels };
  
  //     if (updatedActiveHotels[hotelId]) {
  //       delete updatedActiveHotels[hotelId];
  //     } else {
  //       updatedActiveHotels[hotelId] = true;
        
  //       // Set initial bed count to 1 when adding a hotel
  //       setBedCounts((prevBedCounts) => ({
  //         ...prevBedCounts,
  //         [hotelId]: 1,
  //       }));
  //     }
  
  //     return updatedActiveHotels;
  //   });
  // };


//   const handleBedsIncrement = (hotelId: number, totalBedsAvailable: number) => {
//   setBedCounts((prevBedCounts) => {
//     const updatedBedCounts = { ...prevBedCounts };
//     if (updatedBedCounts[hotelId] !== undefined) {
//       // Check if the current bed count is less than the total beds available
//       if (updatedBedCounts[hotelId] < totalBedsAvailable) {
//         updatedBedCounts[hotelId] += 1;
//       }
//     } else {
//       updatedBedCounts[hotelId] = 1; // Initialize with 1 if not present
//     }
//     return updatedBedCounts;
//   });
// };
  
// const handleBedsDecrement = (hotelId: number) => {
//   setBedCounts((prevBedCounts) => {
//     const updatedBedCounts = { ...prevBedCounts };
//     if (updatedBedCounts[hotelId] > 1) {
//       updatedBedCounts[hotelId] -= 1;
//     } else {
//       // Remove the hotel ID from bedCounts if count is 0
//       const { [hotelId]: _, ...rest } = updatedBedCounts;

//       // Also remove the hotel ID from activeHotels to show the ADD button again
//       setActiveHotels((prevActiveHotels) => {
//         const updatedActiveHotels = { ...prevActiveHotels };
//         delete updatedActiveHotels[hotelId];
//         return updatedActiveHotels;
//       });

//       return rest;
//     }
//     return updatedBedCounts;
//   });
// };

  useEffect(() => {
    console.log("Activehotels: " + JSON.stringify(activeHotels))
  }, [activeHotels])


  
  return (
    <div className={[styles.hostDetails, className].join(" ")}>
      <div className={styles.hostInfoParent}>
        <div className={styles.hostInfo}>
          <h2 className={styles.entireRentalUnit}>
            Entire rental unit hosted by Ghazal
          </h2>
        </div>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.dividerRow}>
        <div className={styles.divider} />
      </div>
      <div className={styles.listingFeatures}>
        <div className={styles.details}>
          <div className={styles.airbnbDataDetail}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon-21.svg"
            />
            <div className={styles.titleSubtitle}>
              <div className={styles.title}>Entire home</div>
              <div className={styles.subtitle}>
                You’ll have the apartment to yourself
              </div>
            </div>
          </div>
          <div className={styles.airbnbDataDetail1}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/icon-3.svg"
            />
            <div className={styles.titleSubtitle1}>
              <div className={styles.title1}>Enhanced Clean</div>
              <div className={styles.subtitle1}>
                <span>{`This Host committed to Airbnb’s 5-step enhanced cleaning process. `}</span>
                <span className={styles.showMore}>Show more</span>
              </div>
            </div>
          </div>
          <div className={styles.airbnbDataDetail2}>
            <img
              className={styles.icon2}
              loading="lazy"
              alt=""
              src="/icon-4.svg"
            />
            <div className={styles.titleSubtitle2}>
              <div className={styles.title2}>Self check-in</div>
              <div className={styles.subtitle2}>
                Check yourself in with the keypad.
              </div>
            </div>
          </div>
          <div className={styles.airbnbDataDetail3}>
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <div className={styles.titleSubtitle3}>
              <div className={styles.title3}>
                Free cancellation before Feb 14
              </div>
              <div className={styles.subtitle3}>Subtitle</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dividerWrapper}>
        <div className={styles.divider1} />
      </div>
      <div className={styles.listingDescription}>
        <div className={styles.comeAndStayContainer}>
          <p>
            {displayedText}
            {!isExpanded && isTextLong ? "..." : ""}
          </p>
        </div>
        {isTextLong && (
          <div
            className={styles.iconText}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.readMoreLabel}>
              {isExpanded ? "Show less" : "Show more"}
            </div>
            <div className={styles.readMoreChevron}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.sleepingArea}>
        <div className={styles.whereYoullSleep}>
          <h2 className={styles.whereYoullSleep1}>Dorms</h2>
          {validRoomsDorms && validRoomsDorms.length > 0 ? (
            validRoomsDorms.map((rooms_dorms: any, index: number) => (
              <DormroomContainer
                rooms_dorms={rooms_dorms}
                key={index}
                activeHotels={activeHotels}
                setActiveHotels={setActiveHotels}
                bedCounts={bedCounts}
                setBedCounts={setBedCounts}
              />
            ))
          ) : (
            <DormroomContainer rooms_dorms={{}} />
          )}

          <h2 className={styles.whereYoullSleep1}>Private Rooms</h2>
          {validRoomsDorms1 && validRoomsDorms1.length > 0 ? (
            validRoomsDorms1.map((rooms_private: any, index: number) => (
              <PrivateroomContainer
                rooms_private={rooms_private}
                key={index}
                activeHotels1={activeHotels1}
                setActiveHotels1={setActiveHotels1}
                bedCounts1={bedCounts1}
                setBedCounts1={setBedCounts1}
              />
            ))
          ) : (
            <PrivateroomContainer rooms_private={{}} />
          )}
        </div>
      </div>
      <div className={styles.dividerFrame}>
        <div className={styles.divider3} />
      </div>
      <div className={styles.whereYoullSleepWrapper}>
        <div className={styles.whereYoullSleep2}>
          <h2 className={styles.whatThisPlace}>What this place offers</h2>
          <div className={styles.columns}>
            <Column facilities={firstHalf} length={length} />
            <Column facilities={secondHalf} length={length} />
          </div>
          <button
            className={styles.button}
            onClick={handleToggle1}
            style={buttonStyle(hoveredButton === "third")}
            onMouseEnter={() => setHoveredButton("first")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className={styles.buttonBase}>
              <img className={styles.icon3} alt="" src="/icon3.svg" />
              <div className={styles.showMoreLabel}>
                {length === 5
                  ? `Show all ${facilitiesSummary.length} amenities`
                  : "Show less"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostDetails;
