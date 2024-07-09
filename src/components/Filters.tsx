import { FunctionComponent } from "react";
import styles from "./Filters.module.css";

export type FiltersType = {
  className?: string;
};

const Filters: FunctionComponent<FiltersType> = ({ className = "" }) => {
  return (
    <div className={[styles.filters, className].join(" ")}>
      <div className={styles.left}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <a className={styles.text}>Price</a>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonBase1}>
            <img className={styles.icon2} alt="" src="/icon.svg" />
            <div className={styles.text1}>Type of place</div>
            <img className={styles.icon3} alt="" src="/icon1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.contentDivider}>
        <div className={styles.divider} />
      </div>
      <div className={styles.right}>
        <div className={styles.button2}>
          <div className={styles.buttonBase2}>
            <img className={styles.icon4} alt="" src="/icon.svg" />
            <a className={styles.text2}>Party hostels</a>
            <img className={styles.icon5} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button3}>
          <div className={styles.buttonBase3}>
            <img className={styles.icon6} alt="" src="/icon.svg" />
            <a className={styles.text3}>Peaceful Hostels</a>
            <img className={styles.icon7} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button4}>
          <div className={styles.buttonBase4}>
            <img className={styles.icon8} alt="" src="/icon.svg" />
            <a className={styles.text4}>Soical</a>
            <img className={styles.icon9} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button5}>
          <div className={styles.buttonBase5}>
            <img className={styles.icon10} alt="" src="/icon.svg" />
            <a className={styles.text5}>Workstation</a>
            <img className={styles.icon11} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button6}>
          <div className={styles.buttonBase6}>
            <img className={styles.icon12} alt="" src="/icon.svg" />
            <div className={styles.text6}>Trekking</div>
            <img className={styles.icon13} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button7}>
          <div className={styles.buttonBase7}>
            <img className={styles.icon14} alt="" src="/icon.svg" />
            <div className={styles.text7}>Hiking</div>
            <img className={styles.icon15} alt="" src="/icon2.svg" />
          </div>
        </div>
        <button className={styles.button8}>
          <div className={styles.buttonBase8}>
            <img className={styles.icon16} alt="" src="/icon.svg" />
            <a className={styles.text8}>Free parking</a>
            <img className={styles.icon17} alt="" src="/icon2.svg" />
          </div>
        </button>
        <div className={styles.button9}>
          <div className={styles.buttonBase9}>
            <img className={styles.icon18} alt="" src="/icon.svg" />
            <a className={styles.text9}>Dryer</a>
            <img className={styles.icon19} alt="" src="/icon2.svg" />
          </div>
        </div>
        <div className={styles.button10}>
          <div className={styles.buttonBase10}>
            <img
              className={styles.icon20}
              loading="lazy"
              alt=""
              src="/icon-2.svg"
            />
            <a className={styles.text10}>Filters</a>
            <img className={styles.icon21} alt="" src="/icon2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
