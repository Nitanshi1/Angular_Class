const express = require('express');
const router = express.Router();


const applicationController = require('../controller/applicationController');

router.get('/', applicationController.getAllApplications);
router.get('/:id', applicationController.getAllApplicationsById);
router.post('/', applicationController.createApplication);
router.put('/:id', applicationController.updateApplication);
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;