const Customer = require("../models/customer");

module.exports.list = (req, res) => {
  Customer.find()
    .then(cutomers => {
      res.json(cutomers);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const { user } = req;
  const customer = new Customer(body);
  customer.user = user._id;
  customer
    .save()
    .then(customer => {
      res.json(customer);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Customer.findById(id)
    .populate("user")
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;

  Customer.findByIdAndDelete(id)
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
