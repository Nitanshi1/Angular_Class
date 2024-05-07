const commentService=require('../services/commentServices');

exports.getAllComments=async (req,res)=>{
    try{
      const comments=await commentService.getAllComments(req.params.id);
      if(!comments){
        res.status(404).json({message:"Failed to get comments"})
      }
      res.json(comments);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}

exports.createComment=async (req,res)=>{
    try{
      const comment=await commentService.createComment(req.params.id,req.body);
      if(!comment){
        res.status(404).json({message:"No comment Found"})
      }
      // await questionService.addAnswer(answer.question,answer._id)
      res.json(comment);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}