import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import api from '../api';
import EditEmployeeForm from '../components/forms/EditEmployeeForm';

function EmployeeInfo() {
  const navigate = useNavigate();

  const onSave = async (body) => {
    await api.createEmployee(body);
    toast('Employee created!');
    navigate('/');
  };

  const onCancel = () => navigate('/');

  return (
    <div className="page">
      <EditEmployeeForm
        defaultValues={{}}
        onSubmit={onSave}
        onCancel={onCancel}
      />
    </div>
  );
}

export default EmployeeInfo;
