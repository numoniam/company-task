const mysql= require('mysql')

const cons=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'savan'

})

module.exports=cons;