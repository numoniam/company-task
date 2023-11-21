const path = require('path')

module.exports=function makeGetAllUser({ fs }){
 return function getAllUser(){
        const users=JSON.parse(fs.readFileSync(path.join(__dirname,'simple_file.json')))
        return users
    }
}

