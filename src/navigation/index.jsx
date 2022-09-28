import React from 'react';
import { Route, Routes } from 'react-router';
import CreateEmployee from '../pages/CreateEmployee';
import EmployeeInfo from '../pages/EmployeeInfo';
import EmployeesList from '../pages/EmployeesList';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeInfo />} />
      <Route path="/employee/" element={<CreateEmployee />} />
    </Routes>
  );
}

export default Navigation;
