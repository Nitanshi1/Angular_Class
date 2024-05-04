const express=require('express');
const router=express.Router();
const authController=require('../Controller/authController');
router.post('/register',authController.register)
router.post('/login',authController.login);
router.get('/userdetails',authController.getUserProfile);
module.exports=router;