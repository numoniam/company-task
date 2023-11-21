const express=require('express');
const touController=require('./../controllers/tourController')


const router=express.Router();

//parameter middleware
router.param('id',touController.checkID)

//create a checkbody miidleware
//check if body contain the name and price property
//if not send back 400
//add it to the post handler

router
.route('/')
.get(touController.getAllTours)
.post(touController.checkBody,touController.createTour);

router
.route('/:id')
.get(touController.getTour)
.patch(touController.updateTour)
.delete(touController.deleteTour)

module.exports=router