const express = require('express');
const router = express.Router();

const commentController = require('../Controller/commController')

router.get('/:appId',commentController.getCommentsForApplication);
router.post('/',commentController.createComment);
router.put('/:commentId',commentController.updateComment);
router.delete('/:commentId',commentController.deleteComment);

module.exports = router;

