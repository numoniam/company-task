module.exports=function makeCreateUserAction({createUser}){
    return async function createUserAction(req,res){
        try{
            const newUserData=req.body;
            const userData=await createUser({newUserData})
            res.status(201).json({
                status: "success",
                data:{
                    message:"user data created successfully",
                    data:userData
                }
              });
        }
        catch(err)
        {
            res.status(500).json({
                status:"fail",
                data:{
                    message:"we can't able to create data..."
                }
            })
        }
    }
}