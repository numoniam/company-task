const EventEmitter=require('events')

const eventEmitter=new EventEmitter()

class Logger extends EventEmitter{

    sayHello(message)
    {
        console.log(message);

        this.on('submit',()=>{
            console.log("hello this is event trigger");
        })
    }

}
module.exports=Logger
