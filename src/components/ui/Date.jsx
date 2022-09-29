import cn from 'classnames';
import React, { useState } from 'react';
import { formatDate } from '../../helpers';
import DatePicker from '../DatePicker';
import Modal from '../Modal';

function Date({
  label, error, value, onChange, ...props
}) {
  const [calendarOpened, setCalendarOpened] = useState(false);

  const onDateChange = (val) => {
    setCalendarOpened(false);
    onChange(val?.toISOString());
  };

  return (
    <>
      <div className="input">
        <p className="form-label">
          {label}
          <input
            onClick={() => setCalendarOpened((prev) => !prev)}
            {...props}
            readOnly
            value={formatDate(value)}
            className={cn(['form-control', { 'is-valid': !error && value.length }, { 'is-invalid': error }])}
          />
        </p>
        {error && (
        <p className="invalid-feedback">
          {error?.message || 'Field is incorrect'}
        </p>
        )}
      </div>
      <Modal
        title={`Select ${label.toLowerCase()}`}
        onClose={() => setCalendarOpened(false)}
        opened={calendarOpened}
      >
        <DatePicker onChoose={onDateChange} />
      </Modal>
    </>
  );
}

export default Date;
