const dataAccess = require("./../data-access");

const makeGetAllUser = require("./getAllUser");
const getAllUser = makeGetAllUser({ user: dataAccess.getAllUser });

const makeCreateUser = require("./createUser");
const createUser = makeCreateUser({ user: dataAccess.createUser });

const makeGetUser = require("./getUser");
const getUser = makeGetUser({ user: dataAccess.getUser });

const makeUpdateUser = require("./updateUser");
const updateUser = makeUpdateUser({ user: dataAccess.updateUser });

const makeDeleteUser = require("./deleteUser");
const deleteUser = makeDeleteUser({ user: dataAccess.deleteUser });

module.exports = {
  getAllUser,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
