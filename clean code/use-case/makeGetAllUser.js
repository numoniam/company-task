module.exports=function makeGetAllUSer({ users }){
    return async function getAllUser(){
        const user=await users()
        return user
    }
}