import React from 'react';
import Calendar from 'react-calendar';

function DatePicker({ onChoose }) {
  return (
    <Calendar
      allowPartialRange={false}
      returnValue="end"
      onChange={onChoose}
    />
  );
}

export default DatePicker;
