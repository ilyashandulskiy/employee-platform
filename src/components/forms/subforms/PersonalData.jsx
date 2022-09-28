import React from 'react';
import Input from '../../ui/Input';

function PersonalData({ register, formState }) {
  return (
    <>
      <h4>Personal data</h4>
      <div className="rows">
        <Input
          label="First name"
          {...register('name', { required: true })}
          error={formState.errors?.name}
        />
        <Input
          label="Second name"
          {...register('surname', { required: true })}
          error={formState.errors?.surname}
        />
      </div>
      <div className="rows">
        <Input
          label="Age"
          {...register('age', {
            valueAsNumber: true,
            validate: (val) => (+val > 18 && +val < 99) || !val,
          })}
          error={formState.errors?.age}
        />
        <Input
          label="Favorite letter"
          maxLength="1"
          {...register('favoriteLetter', { })}
          error={formState.errors?.favoriteLetter}
        />
      </div>
    </>
  );
}

export default PersonalData;
