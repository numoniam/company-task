const express=require('express')
const morgan = require('morgan')
const route=require('./rest-services')

const app=express()

app.use(express.json())
app.use(morgan('tiny'))

app.use('/employee',route)

const port=4000
app.listen(port,()=>{
    console.log(`service started running on port ${port}...`);
})