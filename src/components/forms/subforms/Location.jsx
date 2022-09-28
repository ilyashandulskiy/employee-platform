import React from 'react';
import Input from '../../ui/Input';

function Location({ register, formState }) {
  return (
    <>
      <h4>Location</h4>
      <Input
        label="Address"
        {...register('address', { })}
        error={formState.errors?.address}
      />
      <Input
        label="Registration address"
        {...register('registrationAddress', { })}
        error={formState.errors?.registrationAddress}
      />
    </>
  );
}

export default Location;
