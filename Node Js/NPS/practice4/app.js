const EventEmitter=require('events')

const eventEmitter=new EventEmitter()

eventEmitter.on('submit',()=>{
    console.log("hello thisis event trigger");
})

eventEmitter.on('submit')