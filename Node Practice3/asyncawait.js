const fs = require('fs')
const superagent = require('superagent')


//reading file promise--------------------------------
const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject('i coud not find the file')
            }
            resolve(data);
        })
    })
}

//writing file promise-------------------------------
const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                reject('i coud not write data')
            }
            resolve('success')
        })
    })
}

//call promise--------------------------------------
// readFilePro(`${__dirname}/dog.txt`)
//     .then(data => {
//         return superagent.get(`https://dog.ceo/api/${data}/image/random`)
//     })
//     .then((res) => {
//         console.log(res.body.message);

//         return writeFilePro('./dog-img.txt', res.body.message)
//     })
//     .then(() => {
//         console.log('random dog image saved');
//     })


//     .catch((err) => {
//         console.log(err.message);
//     })

//asyn/await-----------------------------------------

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`)
        console.log(data);

        const res = await superagent.get(`https://dog.ceo/api/${data}/image/random`)
        console.log(res.body.message);

        await writeFilePro('./dog-img.txt', res.body.message)
        console.log('random dog image saved');

    }
    catch (err) {
        console.log(err);
        throw err
    }

    return "savan"
}
// console.log("1 will get dog pics");
// getDogPic()
// .then((x)=>{
//     console.log(x);
//     console.log("done getting dog pics");

// })
// .catch(err=>{
//     console.log("error accurs");
// })

(async () => {
    try {
        console.log("1 will get dog pics");
        const x = await getDogPic()
        console.log(x);
        console.log("3 done ");

    }
    catch(err)
    {
        console.log('error');
    }
    

})()



