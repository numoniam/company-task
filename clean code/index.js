const express=require('express')
const morgan=require('morgan')
const userRoute=require('./rest-services')

const app=express()

app.use(express.json())
app.use(morgan('tiny'))


app.use('/api/v1/users',userRoute)

const port=3000
app.listen(port,()=>{
    console.log(`server started listening on ${port}.....`);
})