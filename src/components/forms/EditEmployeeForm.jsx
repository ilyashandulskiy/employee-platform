import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Contacts from './subforms/Contacts';
import ExtraDetails from './subforms/ExtraDetails';
import Family from './subforms/Family';
import Location from './subforms/Location';
import PersonalData from './subforms/PersonalData';
import SubmitButtons from './subforms/SubmitButtons';
import WorkProgress from './subforms/WorkProgress';

function EditEmployeeForm({
  onSubmit, onCancel, onDelete, defaultValues, withDelete,
}) {
  const {
    handleSubmit, register, formState, control,
  } = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <PersonalData
        register={register}
        formState={formState}
        control={control}
        Controller={Controller}
      />
      <Contacts register={register} formState={formState} />
      <WorkProgress register={register} formState={formState} />
      <Location register={register} formState={formState} />
      <Family register={register} formState={formState} />
      <ExtraDetails register={register} formState={formState} />

      <SubmitButtons
        onCancel={onCancel}
        onDelete={onDelete}
        withDelete={withDelete}
      />
    </form>
  );
}

export default EditEmployeeForm;
