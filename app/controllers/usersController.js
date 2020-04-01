const User = require("../models/user");

module.exports.create = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then(users => {
      // res.json({createdAt:new Date(),
      // users})
      res.json(users);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.createToken = (req, res) => {
  const body = req.body;
  User.findByCredentials(body.email, body.password)
    .then(function(user) {
      return user.generateToken();
    })
    .then(function(token) {
      // res.setHeader("x-auth", token).send({});
      res.setHeader("x-auth", token).send({});
    })
    .catch(function(err) {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const { token, user } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(function(user) {
      res.send({ notice: "Succesfully logout" });
    })
    .catch(function(err) {
      res.send(err);
    });
};
module.exports.show = (req, res) => {
  const { user, token } = req;
  console.log("token" + token);
  res.send(user);
};
