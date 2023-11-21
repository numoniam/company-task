console.log("start");

const fs=require('fs')

const text=fs.readFileSync('./file.txt','utf-8');

console.log(text);

// const textOut=`This is what we know:${text}.\n created on ${Date.now()}`

// fs.writeFileSync('./file.txt',textOut)

// console.log('file writen');

console.log("end");