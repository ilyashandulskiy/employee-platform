import React from 'react';
import { useNavigate } from 'react-router';
import EmployeeCard from '../components/EmployeeCard';
import Spinner from '../components/Spinner';
import { useEmployees } from '../hooks/useApi';

function EmployeesList() {
  const { data, isError } = useEmployees();
  const navigate = useNavigate();

  const onCreate = () => {
    navigate('employee');
  };

  return (
    <div className="page">
      <h2>List of your employees</h2>
      {isError && <h2>Error connecting to the server</h2>}
      {!data?.length ? <Spinner /> : (
        <>
          <div className="cardList">
            {data?.map((employee) => <EmployeeCard {...employee} />)}
          </div>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onCreate}
          >
            Create employee
          </button>
        </>
      )}
    </div>
  );
}

export default EmployeesList;
