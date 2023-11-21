const express=require('express')
const morgan = require('morgan')
const userRoute=require('./route/userRoutes')

const app=express()
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/v1/users',userRoute)


module.exports=app