const express=require('express');
const router=express.Router();
// const { authorize } = require('../Middleware/authMiddleware'); 
const applicationController=require('../Controller/appController')

router.get('/', applicationController.getAllApplications)
router.get('/:appId',  applicationController.getApplicationById )
router.put('/:appId', applicationController.updateApplication )
router.post('/', applicationController.createApplication)
router.delete('/:appId',applicationController.deleteApplication )
router.get('/created/:adminUserId', applicationController.getCreatedApps)

module.exports = router;


