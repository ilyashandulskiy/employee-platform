import React from 'react';
import { Route, Routes } from 'react-router';
import EmployeeInfo from '../pages/EmployeeInfo';
import EmployeesList from '../pages/EmployeesList';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeInfo />} />
    </Routes>
  );
}

export default Navigation;
