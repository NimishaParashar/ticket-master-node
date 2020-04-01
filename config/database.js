const mongoose = require("mongoose");
const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/my-ticket-master")
    .then(() => {
      console.log("conneted to db");
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = setupDB;
