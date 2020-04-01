const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4
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
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
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

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
