const express = require("express");
const router = express.Router();
const companyController = require("./controllers");

router.route("/").post(companyController.createCompanyAction);

module.exports = router;
