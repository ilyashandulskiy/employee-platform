import cn from 'classnames';
import React, { forwardRef, useState } from 'react';

const Input = forwardRef(({ label, error, ...props }, ref) => {
  const [text, setText] = useState('');

  return (
    <div className="input">
      <p className="form-label">
        {label}
        <input
          {...props}
          ref={ref}
          type="text"
          onInput={(val) => setText(val.currentTarget.value)}
          className={cn(['form-control', { 'is-valid': !error && text.length }, { 'is-invalid': error }])}
        />
      </p>
      {error && (
      <p className="invalid-feedback">
        {error?.message || 'Field is incorrect'}
      </p>
      )}
    </div>
  );
});

export default Input;
