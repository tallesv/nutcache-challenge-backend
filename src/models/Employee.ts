import Mongoose from 'mongoose';

const employee = new Mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  birthDate:{
    type: Date,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  cpf:{
    type: String,
    required: true
  },
  startDate:{
    type: Date,
    required: true
  },
  team: String
});

const employeeModel = Mongoose.model('employees', employee);

export default employeeModel;