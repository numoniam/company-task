module.exports=function makegetAllUser({users}){
    return async function getAllUser(req,res){
        const user=await users()
        res.status(200).json(user)
    }
}