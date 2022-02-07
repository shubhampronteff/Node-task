const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Practice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("Could not connect to mongodb...", err));
app.use(express.json());
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
app.get("/api", (req, res) => {
  res.send("hello");
});
app.get("/getEmployee", async (req, res) => {
  const data = await Employee.find();
  res.send(data);
});
app.get("/getSingleEmployee/:id", async (req, res) => {
  const data = await Employee.find({ id: req.params.id });
  res.send(data);
});
app.post("/createemployee", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    id: req.body.id,
    dob: req.body.dob,
    department: req.body.department,
    technology: req.body.technology,
  });
  const result = await employee.save();
  res.send(result);
});
app.put("/updateemployee/:id", async (req, res) => {
  //   let employee = await Employee.findByIdAndUpdate(req.params.id, {
  //     name: req.body.name,
  //   });
  let employee = await Employee.findOneAndUpdate({ id: req.params.id });
  employee.name = req.body.name;
  const result = await employee.save();
  res.send(result);
});

app.delete("/deleteemployee/:id", async (req, res) => {
  //   let employee = await Employee.findByIdAndUpdate(req.params.id, {
  //     name: req.body.name,
  //   });
  let employee = await Employee.findOneAndDelete({ id: req.params.id });

  //   const result = await employee.save();
  res.send(employee);
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
