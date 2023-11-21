const cons = require("./../config");

const { makeGetAllUser, makeGetUser, makeCreateUser } = require("./userData");

const getAllUser = makeGetAllUser({ cons });

const getUser=makeGetUser({cons})

const createUser=makeCreateUser({cons})

module.exports = {
  getAllUser,
  getUser,
  createUser
};
