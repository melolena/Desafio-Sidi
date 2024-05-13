import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ptBR } from '@mui/x-date-pickers/locales';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/de';
import '../pages/baterPonto/style.sass'
export default function Calendario() {

    

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}
    localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DateCalendar/>
    </LocalizationProvider>
  );
}
