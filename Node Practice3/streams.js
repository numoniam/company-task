const fs=require('fs')
const server=require('http').createServer();

server.on('request',(req,res)=>{
    // fs.readFile('text.txt',(err,data)=>{
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     res.end(data)
    // })
    //------------------------------------------------
    //  const reaable=fs.createReadStream('text1.txt') 
    //  reaable.on('data',chunck=>{
    //     res.write(chunck)
    //  }) 
    //  reaable.on('end',()=>{
    //     res.end()
    //  })
    //  reaable.on('error',err=>{
    //     console.log(err);
    //     res.statusCode=500
    //     res.end('file not found')
    //  })

    //--------------------------------------------------

    const reaable=fs.createReadStream('text.txt')
    reaable.pipe(res)


})

server.listen(3000,()=>{
    console.log('listning.....');
})

