const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return "Invalid Email";
      }
    }
  },
  mobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 12
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
