import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardColumns.module.css";

export type CardColumnsType = {
  className?: string;
  rectangle16?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const CardColumns: FunctionComponent<CardColumnsType> = ({
  className = "",
  rectangle16,
  propPadding,
}) => {
  const cardColumnsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.cardColumns, className].join(" ")}
      style={cardColumnsStyle}
    >
      <div className={styles.cardRows}>
        <img className={styles.cardRowsChild} alt="" src={rectangle16} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.saveInr50050Container}>
            <span className={styles.saveInr50050Container1}>
              <span>
                <span></span>
              </span>
              <span className={styles.saveInr50050}>
                <span>{` `}</span>
                <span className={styles.saveInr500501}>Save iNR 500,50</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.duration}>
        <div className={styles.duration1}>
          <div className={styles.days6}>{`7 days & 6 nights`}</div>
          <div className={styles.rating}>
            <div className={styles.div}>
              <span>
                <span className={styles.span}>{` `}</span>
                <b>4.5</b>
              </span>
              <span className={styles.span1}> (200)</span>
            </div>
          </div>
        </div>
        <div className={styles.ladakhAdventureExpedition}>
          Ladakh Adventure Expedition With Turtuk Village
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.itinerary}>
            <div className={styles.daysLehContainer}>
              <span className={styles.daysLehContainer1}>
                <span>{` `}</span>
                <span className={styles.daysLeh}>{`2Days Leh        `}</span>
                <span>{` `}</span>
                <span
                  className={styles.daysNubraValley}
                >{`2Days Nubra Valley       `}</span>
                <span>{` `}</span>
                <span
                  className={styles.dayPangong}
                >{`1Day Pangong      `}</span>
                <span>{` `}</span>
                <span className={styles.daySpiti}>1Day Spiti</span>
              </span>
            </div>
            <div className={styles.itineraryInner}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.itineraryChild}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameChild1} />
            </div>
          </div>
        </div>
        <div className={styles.offerBadge}>
          <div className={styles.offerBadgeChild} />
          <div className={styles.bestOffer}>BEST OFFER</div>
        </div>
        <div className={styles.pricing}>
          <div className={styles.pricing1}>
            <div className={styles.pricing2}>
              <div className={styles.pricing3}>
                <div className={styles.inr20000}>INR 20,000</div>
              </div>
              <div className={styles.currency}>
                <div className={styles.inr25000}>INR 25,000</div>
              </div>
              <div className={styles.price}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.save3000}>SAVE 3000</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.requestBack}>
              <span>
                <span className={styles.span2}>
                  <span>{` `}</span>
                </span>
                <span className={styles.requestBack1}>
                  <span className={styles.request}>request</span>
                  <span className={styles.back}> BACK</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardColumns;
