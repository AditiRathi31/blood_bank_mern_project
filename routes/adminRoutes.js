const express=require("express");
const authmiddleware = require('../middlewares/authmiddleware');
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require("../controllers/adminController");
const adminMidlleware = require("../middlewares/adminMidlleware");


//route object
const router=express.Router();

//routes

//donar list->get
router.get("/donar-list", authmiddleware , adminMidlleware,getDonarsListController);

//hospital list->get
router.get("/hospital-list", authmiddleware , adminMidlleware,getHospitalListController);

//org list->get
router.get("/org-list", authmiddleware , adminMidlleware,getOrgListController);

//delete donar->get
router.delete("/delete-donar/:id",authmiddleware,adminMidlleware,deleteDonarController);
//export
module.exports=router;