const express=require('express')
const router=express.Router()

const userController=require('./../controllers/userController')

router
.route('/')
.get(userController.getAllUser)
.post(userController.creatUser);



router
.route('/:id')
.get(userController.getParticularUser)
.delete(userController.deleteUser)
.patch(userController.updateUser)

module.exports=router


