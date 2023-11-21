const Joi = require("@hapi/joi");
const { getEmployeeDetail } = require("../internal-service-call");
const {
  createCompanyDb,
  getAllCompanyDb,
  getCompanyDb,
  deleteCompanyDb,
  updateCompanyDb,
  getCompanyDetailDb,
} = require("../data-access");

const makeCreateCompany = require("./create-company");
const createCompany = makeCreateCompany({ createCompanyDb, Joi });

const makeGetAllCompany = require("./get-all-company");
const getAllCompany = makeGetAllCompany({ getAllCompanyDb });

const makeGetCompany = require("./get-company");
const getCompany = makeGetCompany({ getCompanyDb, getEmployeeDetail,Joi });

const makeDeleteCompany = require("./delete-company");
const deleteCompany = makeDeleteCompany({ deleteCompanyDb, Joi });

const makeUpdateCompany = require("./update-company");
const updateCompany = makeUpdateCompany({ updateCompanyDb, Joi });

const makeGetCompanyDetail = require("./get-company-detail");
const getCompanyDetail = makeGetCompanyDetail({ getCompanyDetailDb, Joi });

module.exports = {
  createCompany,
  getAllCompany,
  getCompany,
  deleteCompany,
  updateCompany,
  getCompanyDetail,
};
