import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import api from '../api';
import EditEmployeeForm from '../components/forms/EditEmployeeForm';
import Spinner from '../components/Spinner';
import { useEmployee } from '../hooks/useApi';

function EmployeeInfo() {
  const { id } = useParams();
  const { data, isLoading, isError } = useEmployee(id);
  const navigate = useNavigate();

  const onSave = async (body) => {
    await api.editEmployee(id, body);
    toast.success('Employee saved!');
    navigate('/');
  };

  const onCancel = () => navigate('/');
  const onDelete = async () => {
    await api.deleteEmployee(id);
    toast.success('Employee deleted!');
    navigate('/');
  };

  return (
    <div className="page">
      {isLoading ? <Spinner /> : <h2>{`Edit employee ${data?.name} ${data?.surname}`}</h2>}
      {isError && <h2>Error connecting to the server</h2>}
      {!isLoading && !isError && (
      <EditEmployeeForm
        withDelete
        defaultValues={data}
        onSubmit={onSave}
        onDelete={onDelete}
        onCancel={onCancel}
      />
      )}
    </div>
  );
}

export default EmployeeInfo;
