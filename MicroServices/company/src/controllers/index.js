const { createCompany } = require("../use-cases");

const makeCreateCompanyAction = require("./create-company");
const createCompanyAction = makeCreateCompanyAction({ createCompany });

module.exports = {
  createCompanyAction,
};
