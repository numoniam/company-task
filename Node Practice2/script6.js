const http=require('http')
const url=require('url')
const fs=require('fs')

const server=http.createServer((req,res)=>{

    const pathName=req.url
    
    if(pathName==='/overview' || pathName==='/')
    {
        res.end('This is overviews')
    }
    else if(pathName==='/product')
    {
        res.end('this is product')
    }
    else if(pathName==='/api')
    {
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const productData=JSON.parse(data)
            console.log(productData);
            res.writeHead(200,{
                'content-type':'applicaion/json'
            })
            res.end(productData)
        })
    }
    else
    {
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello savan'
        })
        res.end('<h1>page not found</h1>')
    }
});

server.listen(3000,'127.0.0.1',()=>{
    console.log("server has been started");
})