import React from 'react';
import Input from '../../ui/Input';

function Family({ register, formState }) {
  return (
    <>
      <h4>Family details</h4>
      <div className="rows">
        <Input
          label="Mother name"
          {...register('family.mother', { })}
          error={formState.errors?.family?.mother}
        />
        <Input
          label="Father name"
          {...register('family.father', { })}
          error={formState.errors?.family?.father}
        />
      </div>
    </>
  );
}

export default Family;
