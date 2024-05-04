const express=require('express');
const applicationController=require('../Controller/appController');
const commentController=require('../Controller/commController');
const {authenticateUser,authorizeUser,authorizeCreator}=require('../Middleware/authMiddleware');
const router=express.Router();
router.get('/',applicationController.getAllApplications)
router.get('/:id',authorizeUser('admin'), authorizeCreator,applicationController.getApplicationById)
router.put('/:id',authorizeUser('admin'),authorizeCreator,applicationController.updateApplication)
router.post('/',authorizeUser('admin') ,applicationController.createApplication)
router.delete('/:id',authorizeUser('admin'),authorizeCreator,applicationController.deleteApplication);
router.post('/comment/:id',commentController.createComment)
router.delete('/comment/delete/:id',commentController.deleteComment)
router.get('/comment/:id',commentController.getComments)
module.exports=router;


