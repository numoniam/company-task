const dataAccess=require('../data-access')

const makeGetAllUser=require('./makeGetAllUser')
const getAllUser=makeGetAllUser({ users:dataAccess.getAllUser })

module.exports={
    getAllUser
}