const express = require('express');
const router = express.Router();


const downlaodController = require('../Controller/downloadController');

router.post('/:id', downlaodController.addToDownload);
router.delete('/:id', downlaodController.removeFromDownload);
router.get('/', downlaodController.getAllDownloads);

module.exports = router;