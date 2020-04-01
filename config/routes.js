const express = require("express");
const router = express.Router();
const usersController = require("../app/controllers/usersController");
const departmentsController = require("../app/controllers/departmentsController");
const ticketsController = require("../app/controllers/ticketsController");
const employeesController = require("../app/controllers/employeesController");
const customersController = require("../app/controllers/customersController");
const { authenticateUser } = require("../app/middleware/authentication");

router.get("/customers", authenticateUser, customersController.list);
router.post("/customers", authenticateUser, customersController.create);
router.delete("/customers/:id", authenticateUser, customersController.destroy);
router.put("/customers/:id", authenticateUser, customersController.update);
router.get("/customers/:id", authenticateUser, customersController.show);

//user-auth
router.post("/users/register", usersController.create);
router.post("/users/login", usersController.createToken);
router.delete("/users/logout", authenticateUser, usersController.destroy);
router.get("/users/account", authenticateUser, usersController.show);

router.get("/departments", authenticateUser, departmentsController.list);
router.post("/departments", authenticateUser, departmentsController.create);
router.delete(
  "/departments/:id",
  authenticateUser,
  departmentsController.destroy
);
router.put("/departments/:id", authenticateUser, departmentsController.update);
router.get("/departments/:id", authenticateUser, departmentsController.show);

router.get("/employees", authenticateUser, employeesController.list);
router.post("/employees", authenticateUser, employeesController.create);
router.delete("/employees/:id", authenticateUser, employeesController.destroy);
router.put("/employees/:id", authenticateUser, employeesController.update);
router.get("/employees/:id", authenticateUser, employeesController.show);

router.get("/tickets", authenticateUser, ticketsController.list);
router.post("/tickets", authenticateUser, ticketsController.create);
router.delete("/tickets/:id", authenticateUser, ticketsController.destroy);
router.put("/tickets/:id", authenticateUser, ticketsController.update);
router.get("/tickets/:id", authenticateUser, ticketsController.show);
module.exports = router;
