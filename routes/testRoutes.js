const express=require('express');
const { testController } = require('../controllers/testcontroller'); //import testController file
const router=express.Router(); //router object -take only router functionality
router.get('/',testController);
module.exports=router;