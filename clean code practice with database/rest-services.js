const express = require("express");

const router = express.Router();
const userConroller = require("./controllers");

router
  .route("/")
  .get(userConroller.getAllUserAction)
  .post(userConroller.createUserAction);

router
  .route("/:id")
  .get(userConroller.getUserAction)
  .patch(userConroller.updateUserAction)
  .delete(userConroller.deleteUserAction);

module.exports = router;
