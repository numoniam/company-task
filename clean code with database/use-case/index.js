const dataAccess = require("./../data-access");

const makeGetAllUser = require("./getAllUser");
const getAllUser = makeGetAllUser({ user: dataAccess.getAllUser });

const makeGetUser = require('./getUser');
const getUser = makeGetUser({ user: dataAccess.getUser });

const makeCreateUser=require('./createUser')
const createUser=makeCreateUser({user:dataAccess.createUser})


module.exports = {
  getAllUser,
  getUser,
  createUser
};
