import React from 'react';
import Input from '../../ui/Input';

function Contacts({ register, formState }) {
  return (
    <>
      <h4>Contacts</h4>
      <div className="rows">
        <Input
          label="Email address"
          {...register('email', { required: true, pattern: /^.+@.+\..+$/ })}
          error={formState.errors?.email}
        />
        <Input
          label="Phone number"
          {...register('phone', { required: true })}
          error={formState.errors?.phone}
        />
      </div>
    </>
  );
}

export default Contacts;
