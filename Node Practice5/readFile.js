const fs=require('fs')

// const text=fs.readFileSync('./data/input.txt','utf-8')
// console.log(text);

// fs.readFile('./data/input.txt','utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log("somthing happen while reading file");
//     }

//     console.log(data);
    
// })


// fs.readFile('./data/input1.txt','utf-8',(err,data)=>{
//     try
//     {
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// })

const content="hello savan"
fs.writeFile('./data/input.txt',content,'utf-8',err=>{
    if(err)
    {
        console.log(err);
    }
    console.log("file written successfully");
})

