const fs = require('fs')
const superagent = require('superagent')

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);

    superagent
        .get(`https://dog.ceo/api/${data}/image/random`)
        .then((res) => {
            console.log(res.body.message);

            fs.writeFile('./dog-img.txt', res.body.message, (err) => {
                console.log(err);
            })

        })
        .catch((err)=>{
            console.log(err.message);
        })
        
})



