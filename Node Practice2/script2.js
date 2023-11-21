const fs=require('fs')

setTimeout(()=>{
    console.log("setTimeout One");
},0)

fs.readFile(__filename,()=>{
    console.log("read file one");
})