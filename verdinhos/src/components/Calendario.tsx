import React from 'react';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

interface CalendarioProps {
  value: Dayjs;
  onChange: (newValue: Dayjs | null) => void;
}

const Calendario: React.FC<CalendarioProps> = ({ value, onChange }) => {
  const renderDay = (
    day: Dayjs,
    _selectedDays: Array<Dayjs | null>,
    pickersDayProps: PickersDayProps<Dayjs>
  ) => {
    return (
      <PickersDay
        {...pickersDayProps}
        day={day}
        sx={{
          '&:hover, &:focus': {
            backgroundColor: '#471D7C !important',
            color: 'white !important',
          },
          ...(pickersDayProps.outsideCurrentMonth && {
            opacity: 0.5,
          }),
        }}
      />
    );
  };

  return (
    <DateCalendar<Dayjs>
      value={value}
      onChange={onChange}
      renderDay={renderDay}
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
