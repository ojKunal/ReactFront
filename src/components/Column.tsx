import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  icon?: string;
  title?: string;
  icon1?: string;
  title1?: string;
  icon2?: string;
  title2?: string;
  icon3?: string;
  title3?: string;
  icon4?: string;
  title4?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  icon,
  title,
  icon1,
  title1,
  icon2,
  title2,
  icon3,
  title3,
  icon4,
  title4,
}) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      <div className={styles.airbnbDataDetail}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
        <div className={styles.titleSubtitle}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>Subtitlejjjjjjjjjjjjjjjjjjjjjjj</div>
        </div>
      </div>
      <div className={styles.airbnbDataDetail1}>
        <img className={styles.icon1} loading="lazy" alt="" src={icon1} />
        <div className={styles.titleSubtitle1}>
          <div className={styles.title1}>{title1}</div>
          <div className={styles.subtitle1}>Subtitle</div>
        </div>
      </div>
      <div className={styles.airbnbDataDetail2}>
        <img className={styles.icon2} loading="lazy" alt="" src={icon2} />
        <div className={styles.titleSubtitle2}>
          <div className={styles.title2}>{title2}</div>
          <div className={styles.subtitle2}>Subtitle</div>
        </div>
      </div>
      <div className={styles.airbnbDataDetail3}>
        <img className={styles.icon3} loading="lazy" alt="" src={icon3} />
        <div className={styles.titleSubtitle3}>
          <div className={styles.title3}>{title3}</div>
          <div className={styles.subtitle3}>Subtitle</div>
        </div>
      </div>
      <div className={styles.airbnbDataDetail4}>
        <img className={styles.icon4} loading="lazy" alt="" src={icon4} />
        <div className={styles.titleSubtitle4}>
          <div className={styles.title4}>{title4}</div>
          <div className={styles.subtitle4}>Subtitle</div>
        </div>
      </div>
    </div>
  );
};

export default Column;
