
const cons=require('../config')

const {
  makeGetAllUser,
  // makeGetUser,
  // makeCreateUser,
  // makeUpdateUser,
  // makeDeleteUser,
} = require("./userData");

const getAllUser = makeGetAllUser({ cons });

const getUser = makeGetUser({ cons });

const createUser = makeCreateUser({ cons });

const updateUser = makeUpdateUser({ cons });

const deleteUser = makeDeleteUser({ cons });

module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
