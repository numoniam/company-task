console.log("start");

process.nextTick(()=>{
    console.log("hello");
});

Promise.resolve().then(()=>{
    console.log("promise resolve");
})

console.log("end");