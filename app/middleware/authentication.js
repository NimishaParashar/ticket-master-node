const User = require("../models/user");

const authenticateUser = function(req, res, next) {
  const token = req.header("x-auth");
  // console.log(token);
  // //  req.user = user;
  // req.token = token;
  // next();
  User.findByToken(token)
    .then(function(user) {
      if (user) {
        req.user = user;
        req.token = token;
        next();
      } else {
        res.status("401").send({ notice: "token not available" });
      }
    })
    .catch(function(err) {
      res.json(err);
    });
};

module.exports = {
  authenticateUser
};
