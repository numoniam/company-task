const axios=require('axios')

const makeGetCompanyId=require('./get-company-id')
const getCompanyId=makeGetCompanyId({axios})

const makeGetCompanyDetail=require('./get-company-detail')
const getCompanyDetail=makeGetCompanyDetail({axios})

module.exports={
    getCompanyId,
    getCompanyDetail
}