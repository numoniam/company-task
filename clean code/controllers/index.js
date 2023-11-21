const useCase=require('../use-case')

const makeGetAllUSer=require('./makeGetAllUserAction')
const getAllUser=makeGetAllUSer({users:useCase.getAllUser})

// const makeGetUser=require('./makeGetUserAction')
// const getUser=makeGetUser({})

// const makeCreateUser=require('./makeCreateUserAction')
// const createUser=makeCreateUser({})

// const makeUpdateUser=require('./makeUpdateUserAction')
// const updateUser=makeUpdateUser({})

// const makeDeleteUser=require('./makeDeleteUserAction')
// const deleteUser=makeDeleteUser({})

module.exports={
    getAllUser
}