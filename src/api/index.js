import methods from './methods';

export default {
  async getAllEmployees() {
    return await methods.post('employees/0', {});
  },
  async getEmployee(id) {
    return await methods.get(`employee/${id}`);
  },
  async deleteEmployee(id) {
    return await methods.drop(`employee/${id}`);
  },
  async createEmployee(body) {
    return await methods.post('employee/', body);
  },
  async editEmployee(id, body) {
    return await methods.put('employee/', { _id: id, ...body });
  },
};
