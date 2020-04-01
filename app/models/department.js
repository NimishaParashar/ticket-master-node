const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  user: {
    type: Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
