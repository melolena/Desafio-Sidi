import React from 'react';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

interface CalendarioProps {
  value: Dayjs;
  onChange: (newValue: Dayjs | null) => void;
}

const Calendario: React.FC<CalendarioProps> = ({ value, onChange }) => {
  return (
    <DateCalendar
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: '#471D7C !important',
        borderRadius: '16px',
        '.Mui-selected': {
          backgroundColor: '#3FD48F !important',
          color: 'white !important',
          '&:hover, &:focus': {
            backgroundColor: '#3FD48F !important',
            color: 'white !important',
          },
        },
      }}
    />
  );
};

export default Calendario;
