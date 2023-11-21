const fs=require('fs')

fs.readFile(__filename,()=>{
    console.log("readfile");
})
console.log("start");

setImmediate(()=>{
    console.log("execute setimmediate");
})

process.nextTick(()=>{
    console.log("execute nexttic");
})

setTimeout(()=>{
    console.log("execute settimeout 1");
},0)

setTimeout(()=>{
    console.log("execute settimeout 2");
},0)

Promise.resolve().then(()=>{
    console.log("exrecute promise");
})


setImmediate(()=>{
    console.log("execute setimmediate");
})

console.log("end");

