const axios=require('axios')

const makeGetEmployeeDetail=require("./get-employee-detail")
const getEmployeeDetail=makeGetEmployeeDetail({axios})

module.exports={getEmployeeDetail}