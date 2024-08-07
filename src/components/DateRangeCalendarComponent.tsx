import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro';

interface DateRangeCalendarComponentProps {
  value: DateRange<Dayjs>;
  onChange: (newValue: DateRange<Dayjs>) => void;
}

const DateRangeCalendarComponent: React.FC<DateRangeCalendarComponentProps> = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangeCalendar
        calendars={1} // Use only the first calendar
        value={value}
        onChange={onChange}
        disableFuture
      />
    </LocalizationProvider>
  );
};

export default DateRangeCalendarComponent;
