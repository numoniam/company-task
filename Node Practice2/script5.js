console.log("satrt");

const fs=require('fs')

fs.readFile('./savan.txt','utf-8',(err,data1)=>{
    // console.log(data1);
    fs.readFile('./savan.txt','utf-8',(err,data2)=>{
        console.log(data2);
    })
})

console.log("end");