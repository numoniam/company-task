const fs = require("fs");

const {
  makeGetAllUser,
  makeGetUser,
  makeCreateUser,
  makeUpdateUser,
  makeDeleteUser,
} = require("./userData");

const getAllUser = makeGetAllUser({ fs });

const getUser = makeGetUser({ fs });

const createUser = makeCreateUser({ fs });

const updateUser = makeUpdateUser({ fs });

const deleteUser = makeDeleteUser({ fs });

module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
