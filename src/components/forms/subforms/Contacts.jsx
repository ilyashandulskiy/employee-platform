import React from 'react';
import patterns from '../../../helpers/patterns';
import Input from '../../ui/Input';

function Contacts({ register, formState }) {
  return (
    <>
      <h4>Contacts</h4>
      <div className="rows">
        <Input
          label="Email address"
          {...register('email', { required: true, pattern: patterns.email })}
          error={formState.errors?.email}
        />
        <Input
          label="Phone number"
          {...register('phone', { required: true, pattern: patterns.phone })}
          error={formState.errors?.phone}
        />
      </div>
    </>
  );
}

export default Contacts;
