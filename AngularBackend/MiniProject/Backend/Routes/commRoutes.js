const express = require('express');
const router = express.Router();

const commentController = require('../Controller/commController')

router.get('/comments/:appId',commentController.getCommentsForApplication);
router.post('/comments',commentController.createComment);
router.put('/comments/:commentId',commentController.updateComment);
router.delete('/comments/:commentId',commentController.deleteComment);




module.exports = router;

