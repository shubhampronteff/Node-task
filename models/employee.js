const Joi = require("joi");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  id: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  dob: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  department: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  technology: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
// const employee = new Employee({

// })
// function validateEmployee(movie) {
//   const schema = Joi.object({
// name: Joi.string().max(50).min(5).required(),
// id: Joi.number().max(50).min(5).required(),
// dob: Joi.string().max(30).min(5).required(),
// department: Joi.string().max(30).min(5).required(),
// technology: Joi.string().max(30).min(5).required(),
//   });
//   return schema.validate(movie);
// }

// exports.validateEmployee = validateEmployee;
exports.Movies = Movies;
