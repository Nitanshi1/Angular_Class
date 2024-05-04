const express=require('express');
const router=express.Router();
const  commentController=require('../controller/CommentController')

router.get('/:id',commentController.getAllComments);
router.get('/:id/details',commentController.getCommentById);
router.post('/:id',commentController.createComment);
router.put('/:id/like',commentController.likeComment);

module.exports=router;