import React from 'react';
import { useNavigate } from 'react-router';

function EmployeeCard({
  name,
  phone,
  _id,
}) {
  const navigate = useNavigate();

  const onEdit = () => navigate(`/employee/${_id}`);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {`Phone ${phone}`}
        </p>
        <button
          onClick={onEdit}
          type="button"
          className="btn btn-outline-primary"
        >
          Edit employee
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
