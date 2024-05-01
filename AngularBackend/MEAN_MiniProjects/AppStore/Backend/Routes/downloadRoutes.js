const express = require('express');
const router = express.Router();


const {downloadCount} = require('../Middleware/authMiddleware'); 
const downlaodController = require('../Controller/downloadAppController');

router.post('/', downlaodController.addToDownload);
router.delete(':id', downlaodController.deleteFromDownload);
router.delete('/downloads/uninstall/:userId/:appId', downlaodController.uninstallApp);
router.get('/downloads/all/:userId', downlaodController.getAllDownloadedApps);

module.exports = router;