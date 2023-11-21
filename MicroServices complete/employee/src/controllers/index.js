const {
  createEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  getAllEmployee,
  getAllEmployeeById,
} = require("../use-cases");

const makeCreateEmployeeAction = require("./create-employee");
const createEmployeeAction = makeCreateEmployeeAction({ createEmployee });

const makeGetEmployeeAction = require("./get-employee");
const getEmployeeAction = makeGetEmployeeAction({ getEmployee });

const makeDeleteEmployeeAction = require("./delete-employee");
const deleteEmployeeAction = makeDeleteEmployeeAction({ deleteEmployee });

const makeUpdateEmployeeAction = require("./update-employee");
const updateEmployeeAction = makeUpdateEmployeeAction({ updateEmployee });

const makeGetAllEmployeeAction = require("./get-all-employee");
const getAllEmployeeAction = makeGetAllEmployeeAction({ getAllEmployee });

const makeGetAllEmployeeByIdAction = require("./get-all-employee-by-id");
const getAllEmployeeByIdAction = makeGetAllEmployeeByIdAction({ getAllEmployeeById });

module.exports = {
  createEmployeeAction,
  getEmployeeAction,
  deleteEmployeeAction,
  updateEmployeeAction,
  getAllEmployeeAction,
  getAllEmployeeByIdAction,
};
