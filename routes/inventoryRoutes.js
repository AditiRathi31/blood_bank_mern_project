const express=require('express');
const authmiddleware = require('../middlewares/authmiddleware');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');
const router=express.Router();

//add inventory->post
router.post('/create-inventory', authmiddleware, createInventoryController);

//get all blood record->get
router.get("/get-inventory", authmiddleware, getInventoryController);

//get recent blood record->get
router.get("/get-recent-inventory", authmiddleware, getRecentInventoryController);

//get all hospital blood  record->post
router.post("/get-inventory-hospital", authmiddleware, getInventoryHospitalController);

//get all donars record->get
router.get("/get-donars", authmiddleware, getDonarsController);

//get all hospital record->get
router.get("/get-hospitals", authmiddleware, getHospitalController);

//get all organisation record->get
router.get("/get-orgnaisation", authmiddleware, getOrgnaisationController);

//get all organisation record of hospital->get
router.get("/get-orgnaisation-for-hospital", authmiddleware, getOrgnaisationForHospitalController);

module.exports=router;