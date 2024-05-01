const express=require('express');
const router=express.Router();

const applicationController=require('../Controller/appController')
const commController = require('../Controller/commController');
router.get('/', applicationController.getAllApplications)
router.get('/:id',  applicationController.getApplicationById )
router.put('/:id', applicationController.updateApplication )
router.post('/', applicationController.createApplication)
router.delete('/:id',applicationController.deleteApplication )


router.post('/comment/:id', commController.createComment)


module.exports = router;


