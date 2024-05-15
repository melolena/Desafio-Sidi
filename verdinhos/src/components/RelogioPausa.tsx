import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function RelogioPausa({ onConfirm }) {
  const handleConfirm = (selectedTime) => {
    onConfirm(selectedTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="" onAccept={handleConfirm} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default RelogioPausa;
