const express = require("express");
const userController = require("./controllers");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUserAction)
  .post(userController.createUserAction);

router.route("/:id").get(userController.getUserAction).post();

module.exports = router;
