const express = require("express");
const router = express.Router();
const employeeController = require("./controllers");

router
  .post("/employee", employeeController.createEmployeeAction)
  .get("/employee/:id", employeeController.getEmployeeAction)
  .delete("/employee/:id", employeeController.deleteEmployeeAction)
  .patch("/employee/:id", employeeController.updateEmployeeAction)
  .get("/employee", employeeController.getAllEmployeeAction)
  .get("/employee/detail/:id", employeeController.getAllEmployeeByIdAction);

module.exports = router;
