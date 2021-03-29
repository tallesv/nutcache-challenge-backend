import Employee from "../models/Employee";

class EmployeesRepository {
  async getAll() {
    const employees = await Employee.find();

    return employees;
  }
};

export default EmployeesRepository;