import { useQuery } from 'react-query';
import api from '../api';

const cacheTime = 0;

export const useEmployees = () => useQuery('', api.getAllEmployees, { cacheTime });
export const useEmployee = (id) => useQuery('', () => api.getEmployee(id), { cacheTime });
