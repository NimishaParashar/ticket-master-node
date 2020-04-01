const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ticketSchema = new Schema({
  code: {
    type: Number,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true
  },
  employees: [
    {
      employee: {
        type: Schema.Types.ObjectId,
        required: true
      }
    }
  ],
  message: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  isResolved: {
    type: Boolean,
    default: false
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;

// {
//     "createdAt": "2020-02-24T12:14:16.727Z",
//     "isResolved": false,
//     "_id": "5e53eaa582eefd0016a509cf",
//     "code": "123",
//     "customer": "5e538dc96133db00169c9bc3",
//     "department": "5e4ac43d9da99a00162c6fbf",
//     "employees": [
//         {
//             "_id": "5e53eaa582eefd0016a509d0"
//         }
//     ],
//     "message": "hey check it once response is ohk or not?",
//     "priority": "High",
//     "user": "5e461cd14adcda0016b15b5e",
//     "__v": 0
// }
