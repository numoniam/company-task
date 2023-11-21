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
readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        return superagent.get(`https://dog.ceo/api/${data}/image/random`)
    })
    .then((res) => {
        console.log(res.body.message);

        return writeFilePro('./dog-img.txt', res.body.message)
    })
    .then(() => {
        console.log('random dog image saved');
    })


    .catch((err) => {
        console.log(err.message);
    })





