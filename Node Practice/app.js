const express=require('express')
const app=express();

let obj=[
    {
        name:"savan",
        service:"harrier"
    },
    {
        name:"Hiren",
        service:"bmw"
    },
    {
        name:"ravi",
        service:"scoda"
    },
    {
        name:"harhit",
        service:"kia"
    },
]

app.get('/',(req,res)=>{
    res.send("hello this is savan")
})

app.post('/api/customers',(req,res)=>{
    res.send(JSON.stringify(obj))
})

app.listen(3000,()=>{
    console.log("listaning on port 3000");
})