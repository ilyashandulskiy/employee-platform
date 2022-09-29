import React from 'react';
import Date from '../../ui/Date';
import Input from '../../ui/Input';

function PersonalData({
  register, formState, Controller, control,
}) {
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
            validate: (val) => (+val >= 18 && +val < 99 && +val !== 0) || !val,
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
      <div className="rows">
        <Controller
          control={control}
          name="dates.birthday"
          render={({
            field: {
              onChange, onBlur, value, name, ref,
            },
            fieldState: {
              invalid, isTouched, isDirty, error,
            },
          }) => (
            <Date
              onChange={onChange}
              value={value || ''}
              error={error}
              label="Birth date"
            />
          )}
        />
        <Controller
          control={control}
          name="dates.start"
          render={({
            field: {
              onChange, onBlur, value, name, ref,
            },
            fieldState: {
              invalid, isTouched, isDirty, error,
            },
          }) => (
            <Date
              onChange={onChange}
              value={value || ''}
              error={error}
              label="Start date"
            />
          )}
        />
      </div>
    </>
  );
}

export default PersonalData;
