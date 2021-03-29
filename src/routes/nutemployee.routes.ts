import express, { response } from 'express';
import { uuid } from 'uuidv4';
import Employee from '../models/Employee';

const nutemployeeRouter = express.Router();

nutemployeeRouter.get('/', async (request, response) => {
  try {
    const employees = await Employee.find();

    return response.json(employees);
  } catch(err) {
    return response.json( {messager: err} )
  }
});

nutemployeeRouter.get('/:employeeId', async (request, response) => {
  try {
    const { employeeId } = request.params;
    const employee = await Employee.find({ _id: employeeId });

    return response.json(employee);
  } catch(err) {
    return response.json( {messager: err} )
  }
});

nutemployeeRouter.post('/', async (request, response) => {
  const { name, birthDate, gender, email, cpf, startDate, team } = request.body;
  const employee = new Employee({
    name,
    birthDate,
    gender,
    email,
    cpf,
    startDate,
    team
  });
  try {
    const savedEmployee = await employee.save();
    return response.json(savedEmployee);
  } catch (err) {
    return response.json({ message: err });
  }
});


nutemployeeRouter.put('/:employeeId', async (request, response) => {
  try {
    const { employeeId } = request.params;
    const employee = await Employee.updateOne({ _id: employeeId }, request.body);

    return response.json(employee);
  } catch(err) {
    return response.json( {messager: err} )
  }
});

nutemployeeRouter.delete('/:employeeId', async (request, response) => {
  try {
    const { employeeId } = request.params;
    const deletedEmployee = await Employee.remove({ _id: employeeId });

    return response.json(deletedEmployee);
  } catch(err) {
    return response.json( {messager: err} )
  }
});

export default nutemployeeRouter;