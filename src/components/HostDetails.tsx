import { FunctionComponent, useState } from "react";
import Column from "./Column";
import styles from "./HostDetails.module.css";

export type HostDetailsType = {
  className?: string;
  data?: any;
};

const HostDetails: FunctionComponent<HostDetailsType> = ({
  className = "",
  data,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [length, setLength] = useState(5);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

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

  const isTextLong = data.overview.length > 250;
  const displayedText = isExpanded
    ? data.overview
    : data.overview.slice(0, 250);

  const facilitiesSummary = data.facilitiesSummary;
  const midpoint = Math.ceil(facilitiesSummary.length / 2);

  // Split the array into two halves
  const firstHalf = facilitiesSummary.slice(0, midpoint);
  const secondHalf = facilitiesSummary.slice(midpoint);

  const buttonStyle = (isHovered: boolean) => ({
    backGroundColor: "red",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
  });

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
      {/* <div className={styles.dividerContainer}>
        <div className={styles.divider2} />
      </div> */}
      {/* <div className={styles.sleepingArea}>
        <div className={styles.whereYoullSleep}>
          <h2 className={styles.whereYoullSleep1}>Where you’ll sleep</h2>
          <div className={styles.thumbnail}>
            <img
              className={styles.bedroomThumbnailIcon}
              loading="lazy"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className={styles.titleSubtitle4}>
              <div className={styles.title4}>Bedroom</div>
              <div className={styles.subtitle4}>1 queen bed</div>
            </div>
          </div>
        </div>
      </div> */}
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
      {/* <div className={styles.frameDiv}>
        <div className={styles.divider4} />
      </div> */}
      {/* <div className={styles.dates}>
        <div className={styles.titleSubtitle5}>
          <h2 className={styles.title5}>7 nights in New York</h2>
          <div className={styles.subtitle5}>Feb 19, 2022 - Feb 26, 2022</div>
        </div>
        <div className={styles.months}>
          <div className={styles.month}>
            <div className={styles.picker}>
              <div className={styles.datePickerHeader}>
                <img
                  className={styles.chevronLeftIcon}
                  alt=""
                  src="/chevronleft.svg"
                />
                <div className={styles.february2022}>February 2022</div>
                <img
                  className={styles.chevronRightIcon1}
                  alt=""
                  src="/chevronright-1.svg"
                />
              </div>
              <div className={styles.calendarBase}>
                <div className={styles.week}>
                  <div className={styles.day}>
                    <div className={styles.m}>Su</div>
                  </div>
                  <div className={styles.day1}>
                    <div className={styles.m1}>Mo</div>
                  </div>
                  <div className={styles.day2}>
                    <div className={styles.m2}>Tu</div>
                  </div>
                  <div className={styles.day3}>
                    <div className={styles.m3}>We</div>
                  </div>
                  <div className={styles.day4}>
                    <div className={styles.m4}>Th</div>
                  </div>
                  <div className={styles.day5}>
                    <div className={styles.m5}>Fr</div>
                  </div>
                  <div className={styles.day6}>
                    <div className={styles.m6}>Sa</div>
                  </div>
                </div>
                <div className={styles.week1}>
                  <div className={styles.day7}>
                    <div className={styles.emptyDay}>28</div>
                  </div>
                  <div className={styles.day8}>
                    <div className={styles.emptyDay1}>29</div>
                  </div>
                  <div className={styles.day9}>
                    <div className={styles.emptyDay2}>30</div>
                  </div>
                  <div className={styles.day10}>
                    <div className={styles.emptyDay3}>31</div>
                  </div>
                  <div className={styles.day11}>
                    <div className={styles.emptyDay4}>1</div>
                  </div>
                  <div className={styles.day12}>
                    <div className={styles.emptyDay5}>2</div>
                  </div>
                  <div className={styles.day13}>
                    <div className={styles.emptyDay6}>3</div>
                  </div>
                </div>
                <div className={styles.week2}>
                  <div className={styles.day14}>
                    <div className={styles.dayNumber}>4</div>
                  </div>
                  <div className={styles.day15}>
                    <div className={styles.emptyDay7}>5</div>
                  </div>
                  <div className={styles.day16}>
                    <div className={styles.emptyDay8}>6</div>
                  </div>
                  <div className={styles.day17}>
                    <div className={styles.emptyDay9}>7</div>
                  </div>
                  <div className={styles.day18}>
                    <div className={styles.emptyDay10}>8</div>
                  </div>
                  <div className={styles.day19}>
                    <div className={styles.emptyDay11}>9</div>
                  </div>
                  <div className={styles.day20}>
                    <div className={styles.dayNumber1}>10</div>
                  </div>
                </div>
                <div className={styles.week3}>
                  <div className={styles.day21}>
                    <div className={styles.emptyDay12}>11</div>
                  </div>
                  <div className={styles.day22}>
                    <div className={styles.emptyDay13}>12</div>
                  </div>
                  <div className={styles.day23}>
                    <div className={styles.emptyDay14}>13</div>
                  </div>
                  <div className={styles.day24}>
                    <div className={styles.emptyDay15}>14</div>
                  </div>
                  <div className={styles.day25}>
                    <div className={styles.emptyDay16}>15</div>
                  </div>
                  <div className={styles.day26}>
                    <div className={styles.emptyDay17}>16</div>
                  </div>
                  <div className={styles.day27}>
                    <div className={styles.emptyDay18}>17</div>
                  </div>
                </div>
                <div className={styles.week4}>
                  <div className={styles.day28}>
                    <div className={styles.emptyDay19}>18</div>
                  </div>
                  <div className={styles.day29}>
                    <div className={styles.emptyDay20}>19</div>
                  </div>
                  <div className={styles.day30}>
                    <div className={styles.emptyDay21}>20</div>
                  </div>
                  <div className={styles.day31}>
                    <div className={styles.emptyDay22}>21</div>
                  </div>
                  <div className={styles.day32}>
                    <div className={styles.emptyDay23}>22</div>
                  </div>
                  <div className={styles.day33}>
                    <div className={styles.emptyDay24}>23</div>
                  </div>
                  <div className={styles.day34}>
                    <div className={styles.emptyDay25}>24</div>
                  </div>
                </div>
                <div className={styles.week5}>
                  <div className={styles.day35}>
                    <div className={styles.emptyDay26}>25</div>
                  </div>
                  <div className={styles.day36}>
                    <div className={styles.emptyDay27}>26</div>
                  </div>
                  <div className={styles.day37}>
                    <div className={styles.emptyDay28}>27</div>
                  </div>
                  <div className={styles.day38}>
                    <div className={styles.emptyDay29}>28</div>
                  </div>
                  <div className={styles.day39}>
                    <div className={styles.emptyDay30}>29</div>
                  </div>
                  <div className={styles.day40}>
                    <div className={styles.emptyDay31}>30</div>
                  </div>
                  <div className={styles.day41}>
                    <div className={styles.lastCalendarDay}>1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.month1}>
            <div className={styles.picker1}>
              <div className={styles.datePickerHeader1}>
                <img
                  className={styles.chevronLeftIcon1}
                  alt=""
                  src="/chevronleft-1.svg"
                />
                <div className={styles.march2022}>March 2022</div>
                <img
                  className={styles.chevronRightIcon2}
                  alt=""
                  src="/chevronright-2.svg"
                />
              </div>
              <div className={styles.calendarBase1}>
                <div className={styles.week6}>
                  <div className={styles.day42}>
                    <div className={styles.m7}>Su</div>
                  </div>
                  <div className={styles.day43}>
                    <div className={styles.m8}>Mo</div>
                  </div>
                  <div className={styles.day44}>
                    <div className={styles.m9}>Tu</div>
                  </div>
                  <div className={styles.day45}>
                    <div className={styles.m10}>We</div>
                  </div>
                  <div className={styles.day46}>
                    <div className={styles.m11}>Th</div>
                  </div>
                  <div className={styles.day47}>
                    <div className={styles.m12}>Fr</div>
                  </div>
                  <div className={styles.day48}>
                    <div className={styles.m13}>Sa</div>
                  </div>
                </div>
                <div className={styles.week7}>
                  <div className={styles.day49}>
                    <div className={styles.div}>28</div>
                  </div>
                  <div className={styles.day50}>
                    <div className={styles.div1}>29</div>
                  </div>
                  <div className={styles.day51}>
                    <div className={styles.div2}>30</div>
                  </div>
                  <div className={styles.day52}>
                    <div className={styles.div3}>31</div>
                  </div>
                  <div className={styles.day53}>
                    <div className={styles.div4}>1</div>
                  </div>
                  <div className={styles.day54}>
                    <div className={styles.div5}>2</div>
                  </div>
                  <div className={styles.day55}>
                    <div className={styles.div6}>3</div>
                  </div>
                </div>
                <div className={styles.week8}>
                  <div className={styles.day56}>
                    <div className={styles.number}>
                      <div className={styles.dayComma}>4</div>
                    </div>
                  </div>
                  <div className={styles.day57}>
                    <div className={styles.div7}>5</div>
                  </div>
                  <div className={styles.day58}>
                    <div className={styles.div8}>6</div>
                  </div>
                  <div className={styles.day59}>
                    <div className={styles.div9}>7</div>
                  </div>
                  <div className={styles.day60}>
                    <div className={styles.div10}>8</div>
                  </div>
                  <div className={styles.day61}>
                    <div className={styles.div11}>9</div>
                  </div>
                  <div className={styles.day62}>
                    <div className={styles.number1}>
                      <div className={styles.dayComma1}>10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.week9}>
                  <div className={styles.day63}>
                    <div className={styles.div12}>11</div>
                  </div>
                  <div className={styles.day64}>
                    <div className={styles.div13}>12</div>
                  </div>
                  <div className={styles.day65}>
                    <div className={styles.div14}>13</div>
                  </div>
                  <div className={styles.day66}>
                    <div className={styles.div15}>14</div>
                  </div>
                  <div className={styles.day67}>
                    <div className={styles.div16}>15</div>
                  </div>
                  <div className={styles.day68}>
                    <div className={styles.div17}>16</div>
                  </div>
                  <div className={styles.day69}>
                    <div className={styles.div18}>17</div>
                  </div>
                </div>
                <div className={styles.week10}>
                  <div className={styles.day70}>
                    <div className={styles.div19}>18</div>
                  </div>
                  <div className={styles.day71}>
                    <div className={styles.div20}>19</div>
                  </div>
                  <div className={styles.day72}>
                    <div className={styles.div21}>20</div>
                  </div>
                  <div className={styles.day73}>
                    <div className={styles.div22}>21</div>
                  </div>
                  <div className={styles.day74}>
                    <div className={styles.div23}>22</div>
                  </div>
                  <div className={styles.day75}>
                    <div className={styles.div24}>23</div>
                  </div>
                  <div className={styles.day76}>
                    <div className={styles.div25}>24</div>
                  </div>
                </div>
                <div className={styles.week11}>
                  <div className={styles.day77}>
                    <div className={styles.div26}>25</div>
                  </div>
                  <div className={styles.day78}>
                    <div className={styles.div27}>26</div>
                  </div>
                  <div className={styles.day79}>
                    <div className={styles.div28}>27</div>
                  </div>
                  <div className={styles.day80}>
                    <div className={styles.div29}>28</div>
                  </div>
                  <div className={styles.day81}>
                    <div className={styles.div30}>29</div>
                  </div>
                  <div className={styles.day82}>
                    <div className={styles.div31}>30</div>
                  </div>
                  <div className={styles.day83}>
                    <div className={styles.div32}>1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <img className={styles.keyboardIcon} alt="" src="/keyboard.svg" />
          <div className={styles.clearDates}>Clear dates</div>
        </div>
      </div> */}
    </div>
  );
};

export default HostDetails;
