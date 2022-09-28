import React from 'react';
import Input from '../../ui/Input';

function ExtraDetails({ register, formState }) {
  return (
    <>
      <h4>Extra details</h4>
      <div className="rows">
        <Input
          label="Phone model"
          {...register('phoneModel', {})}
          error={formState.errors?.phoneModel}
        />
        <Input
          label="Email inbox"
          {...register('emailInbox', { })}
          error={formState.errors?.emailInbox}
        />
      </div>
    </>
  );
}

export default ExtraDetails;
