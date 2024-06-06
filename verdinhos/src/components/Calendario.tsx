import React from 'react';
import Badge from '@mui/material/Badge';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, PickersDay, pickersDayClasses } from '@mui/x-date-pickers';
import { ptBR } from '@mui/x-date-pickers/locales';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import '../pages/baterPonto/styleBP.css';

const ServerDay = (props) => {
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
          }
        }}
      />
    </Badge>
  );
};

export default function Calendario({ onDayClick, selectedDay }) {
  return (
    <LocalizationProvider 
      dateAdapter={AdapterDayjs} 
      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DateCalendar
        value={selectedDay}
        onChange={onDayClick}
        slots={{ day: ServerDay }}
        slotProps={{ day: { onDayClick } }}
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
}
