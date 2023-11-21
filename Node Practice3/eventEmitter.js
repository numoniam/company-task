const EventEmitter=require('events')
const http=require('http')

class Salse extends EventEmitter{
    constructor(){
        super();
    }

}

const myEmitter=new Salse()



myEmitter.on('submit',(message)=>{
    console.log("hello",message);
})

myEmitter.on('submit',(message)=>{
    console.log("savan",message);
})


myEmitter.emit('submit',"ghori")


//------------------------------------------------

const server=http.createServer()


server.on('request',(req,res)=>{
    console.log('request received');
    console.log(req.url);
    res.end('request 1 received')
})

server.on('request',(req,res)=>{
    console.log('another request');
    res.end('request 2 received')
})

server.on('close',(req,res)=>{
    console.log('server close');
})

server.listen('3001',()=>{
    console.log('listning started on 3001.......');
})