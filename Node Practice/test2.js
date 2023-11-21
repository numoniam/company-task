console.log("start");
setTimeout(()=>{
    console.log("hi");
},1000)

setTimeout(()=>{
    console.log("hello");
},1000)

setTimeout(()=>{
    console.log("savan");
},1000)

const retue=setInterval(()=>{
    console.log("end");
},1000)

setTimeout(()=>{
    clearInterval(retue)
},3000)