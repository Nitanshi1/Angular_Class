const express=require('express');
const router=express.Router();
// const { authorize } = require('../Middleware/authMiddleware'); 
const applicationController=require('../Controller/appController')

router.get('/applications', applicationController.getAllApplications)
router.get('/applications/appId',  applicationController.getApplicationById )
router.put('/applications/appId', applicationController.updateApplication )
router.post('/applications', applicationController.createApplication)
router.delete('/applications/appId',applicationController.deleteApplication )
router.get('/applications/created/:adminUserId', applicationController.getCreatedApps)

module.exports = router;


