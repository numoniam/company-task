const fs = require('fs')

setImmediate(()=>{
    console.log("setimmedialte");
})
setTimeout(() => console.log("hello 1"), 0);
setTimeout(() => console.log("hello 2"), 0);


fs.readFile('./text.txt', 'utf-8', (err, data) => {
    setTimeout(() => {

        console.log(data);

        setTimeout(() => console.log("hello 1"), 0);
        setTimeout(() => console.log("hello 2"), 0);

        setImmediate(()=>{
            console.log("setimmedialte");
        })
    }, 2000)

})

console.log("hello savan");
