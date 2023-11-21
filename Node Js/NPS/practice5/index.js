const http=require('http')
let obj=[
    {
        name:"savan",
        age:23
    },
    {
        name:"nency",
        age:23
    },
    {
        name:"hiren",
        age:25
    },
    {
        name:"vivek",
        age:20
    },
    {
        name:"jupin",
        age:31
    },
]

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write('Hello WElcome')
        res.end()
    }

    if(req.url='/api/courses')
    {
        res.write(JSON.stringify(obj));
        res.end()
    }
})

server.listen(3000,()=>{
    console.log("server started on  3000");
})



