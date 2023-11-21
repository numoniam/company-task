const express = require('express');
const morgan=require('morgan');

const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')

const app = express();

//third-party middleware
if(process.env.NODE_ENV=='development')
{
    app.use(morgan('tiny'))
    
}




app.use(express.json())
app.use(express.static(`${__dirname}/public`))

//global middleware that will execute every request
app.use((req,res,next)=>{
    console.log("hello from the middleware");
    next();

})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next()
})

//---------------------------------------------
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'hello from the server side', app: "done" })
// })

// app.post('/', (req, res) => {
//     res.send("you can post the data")
// })
//------------------------------------------------------------
// app.get('/api/v1/tours', getAllTours)

// app.use((req,res,next)=>{
//     console.log("hello from the middleware");
//     next();

// })

// app.get('/api/v1/tours/:id', getTour)

// app.post('/api/v1/tours', createTour)

// app.patch('/api/v1/tours/:id', updateTour)

// app.delete('/api/v1/tours/:id', deleteTour)

//------------------------------------------------


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter)


module.exports=app



