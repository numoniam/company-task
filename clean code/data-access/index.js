const fs=require('fs')

const makeGetAllUser=require('./getAllUser')
const getAllUser=makeGetAllUser({ fs })

console.log(getAllUser);

module.exports={
    getAllUser
}