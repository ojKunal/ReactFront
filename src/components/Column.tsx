import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  facilities?: any;
  length?: number;
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  facilities,
  length,
}) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      {facilities.slice(0, length).map((facility: any, index: number) => (
        <div key={index} className={styles.airbnbDataDetail}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-6.svg"
          />
          <div className={styles.titleSubtitle}>
            <div className={styles.title}>{facility}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Column;
