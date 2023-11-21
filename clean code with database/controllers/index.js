const { getAllUser, getUser, createUser } = require("./../use-case");

const makeGetAllUserAction = require("./makeGetAllUser");
const getAllUserAction = makeGetAllUserAction({ getAllUser });

const makeGetUserAction = require("./makeGetUser");
const getUserAction = makeGetUserAction({ getUser });

const makeCreateUserAction = require("./makeCreateUser");
const createUserAction = makeCreateUserAction({ createUser });

module.exports = {
  getAllUserAction,
  getUserAction,
  createUserAction,
};
