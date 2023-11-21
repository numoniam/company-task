const { createCompanyDb } = require("../data-access");
const makeCreateCompany = require("./create-company");
const createCompany = makeCreateCompany({ createCompanyDb });

module.exports = {
  createCompany,
};
