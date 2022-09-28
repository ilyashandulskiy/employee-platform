import React from 'react';
import Input from '../../ui/Input';

function WorkProgress({ register, formState }) {
  return (
    <>
      <h4>Work progress</h4>
      <div className="rows">
        <Input
          label="Hours"
          {...register('work.hours', {
            required: true,
            valueAsNumber: true,
            validate: (val) => (+val >= 0 && +val < 1000),
          })}
          error={formState.errors?.work?.hours}
        />
        <Input
          label="Deals"
          {...register('work.dealsDone', {
            required: true,
            valueAsNumber: true,
            validate: (val) => (+val >= 0 && +val < 1000),
          })}
          error={formState.errors?.work?.dealsDone}
        />
        <Input
          label="Week hours"
          {...register('work.weekHours', {
            required: true,
            valueAsNumber: true,
            validate: (val) => (+val >= 0 && +val < 1000),
          })}
          error={formState.errors?.work?.weekHours}
        />
        <Input
          label="Week deals"
          {...register('work.weekDeals', {
            required: true,
            valueAsNumber: true,
            validate: (val) => (+val >= 0 && +val < 1000),
          })}
          error={formState.errors?.work?.weekDeals}
        />
      </div>
    </>
  );
}

export default WorkProgress;
