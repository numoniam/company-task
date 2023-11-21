const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("welcome to home page");
        res.end()
    }
    if(req.url=='/api/users')
    {
        res.write("welcome to users informataion page");
        res.end()
    }
    if(req.url=='/api/login')
    {
        res.write("welcome to Login page");
        res.end()
    }
    if(req.url=='/api/register')
    {
        res.write("welcome to register page");
        res.end()
    }
})

server.listen(3000,()=>{
    console.log("listening on port 3000");
})