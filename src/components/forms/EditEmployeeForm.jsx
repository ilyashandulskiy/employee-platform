import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';

function EditEmployeeForm({
  onSubmit, onCancel, onDelete, defaultValues, withDelete,
}) {
  const { handleSubmit, register, formState } = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

      <div className="submitButtons">
        {withDelete && (
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={onDelete}
        >
          Delete card
        </button>
        )}
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">Save card</button>
      </div>
    </form>
  );
}

export default EditEmployeeForm;
