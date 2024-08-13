import * as React from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BrowserV7SingleInputRangeField from './BrowserV6Field'; // Update import path as needed
import { useState } from 'react';
import styles from "../pages/StandardSearch.module.css";

export default function DatePickerComponent() {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);

  return (
    <div className={styles.divinlineFormsmall}>
      <div className={styles.inputnativeInput}>
        {/* <div className={styles.frameWrapper}>
          <img className={styles.frameIcon} alt="" src="/frame3.svg" />
        </div> */}
        <div className={styles.datesParent}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserV7SingleInputRangeField
              value={dateRange}
              onChange={(newValue : any) => setDateRange(newValue as [Dayjs | null, Dayjs | null])}
              slotProps={{
                field: { clearable: true },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      {/* <div className={styles.divvDividerWrapper}>
        <div className={styles.divvDivider} />
      </div> */}
      {/* <div className={styles.inputnativeInput1} style={{backgroundColor:"red"}}>
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
      </div> */}
    </div>
  );
}
