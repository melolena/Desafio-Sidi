import React from 'react';
import Badge from '@mui/material/Badge';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, PickersDay, pickersDayClasses, PickersDayProps } from '@mui/x-date-pickers';
import { ptBR } from '@mui/x-date-pickers/locales';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import '../pages/baterPonto/styleBP.css';

interface ServerDayProps extends PickersDayProps<Dayjs> {
  onDayClick: (day: Dayjs) => void;
}

const ServerDay: React.FC<ServerDayProps> = (props) => {
  const { day, outsideCurrentMonth, onDayClick, ...other } = props;

  return (
    <Badge key={day.toString()} overlap="circular" badgeContent={undefined}>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        onClick={() => onDayClick(day)}
        sx={{
          backgroundColor: 'white !important',
          color: 'black !important',
          fontFamily: 'Josefin Sans !important',
          fontWeight: '500 !important',
          fontSize: '15px !important',
          [`&.${pickersDayClasses.selected}`]: {
            backgroundColor: '#3FD48F !important',
            color: 'white !important',
            '&:hover, &:focus': {
              backgroundColor: '#3FD48F !important',
              color: 'white !important',
            },
          },
          [`&:hover`]: {
            backgroundColor: '#3FD48F !important',
            color: 'white !important',
          },
        }}
      />
    </Badge>
  );
};

interface CalendarioProps {
  onDayClick: (day: Dayjs) => void;
  selectedDay: Dayjs;
}

const Calendario: React.FC<CalendarioProps> = ({ onDayClick, selectedDay }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="pt-br"
    >
      <DateCalendar
        value={selectedDay}
        onChange={(newDay) => {
          if (newDay) {
            onDayClick(newDay);
          }
        }}
        renderDay={(day, _selectedDays, pickersDayProps) => (
          <ServerDay {...pickersDayProps} day={day} onDayClick={onDayClick} />
        )}
        sx={{
          backgroundColor: '#471D7C !important',
          borderRadius: '20px !important',
          '.Mui-selected': {
            backgroundColor: '#3FD48F !important',
            color: 'white !important',
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendario;
