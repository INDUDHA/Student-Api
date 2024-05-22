const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  father_name: String,
  mother_name: String,
  english: Number,
  kannada: Number,
  hindi: Number,
  science: Number,
  social: Number,
  maths: Number,
  total: Number,
});

const Student = mongoose.model("studentDetails", studentSchema);

module.exports = Student;
