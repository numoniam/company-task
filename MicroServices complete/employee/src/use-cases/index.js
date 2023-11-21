const Joi = require("@hapi/joi");
const { getCompanyId, getCompanyDetail } = require("../internal-service-call");
const {
  createEmployeeDb,
  getEmployeeDb,
  deleteEmployeeDb,
  updateEmployeeDb,
  getAllEmployeeDb,
  getAllEmployeeByIdDb
} = require("../data-access");

const makeCreateEmployee = require("./create-employee");
const createEmployee = makeCreateEmployee({
  createEmployeeDb,
  getCompanyId,
  Joi,
});

const makeGetEmployee = require("./get-employee");
const getEmployee = makeGetEmployee({ getEmployeeDb, getCompanyDetail, Joi });

const makeDeleteEmployee = require("./delete-employee");
const deleteEmployee = makeDeleteEmployee({ deleteEmployeeDb, Joi });

const makeUpdateEmployee = require("./update-employee");
const updateEmployee = makeUpdateEmployee({ updateEmployeeDb, Joi });

const makeGetAllEmployee=require("./get-all-employee");
const getAllEmployee=makeGetAllEmployee({getAllEmployeeDb})

const makeGetAllEmployeeById=require("./get-all-employee-by-id")
const getAllEmployeeById=makeGetAllEmployeeById({getAllEmployeeByIdDb,Joi})

module.exports = {
  createEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  getAllEmployee,
  getAllEmployeeById
};
