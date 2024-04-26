const express=require('express');
const router=express.Router();
const { authorize, viewCount } = require('../middleware/authMiddleware'); 
const applicationController=require('../controller/applicationController')
router.get('/', applicationController.getAllApplications)
router.get('/:id', viewCount, applicationController.getApplicationById )
router.put('/:id', authorize('admin'), applicationController.updateApplication )
router.post('/', authorize('admin'), applicationController.createApplication)
router.delete('/:id', authorize('admin'),applicationController.deleteApplication )



module.exports=router;