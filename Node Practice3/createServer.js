const server=require('http')

const app=server.createServer()

app.on('request',(req,res)=>{
    console.log("request received");
    res.end('request received')
})

app.listen(3000)