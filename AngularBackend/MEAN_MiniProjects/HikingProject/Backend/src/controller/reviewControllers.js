const reviewService=require('../services/reviewServices');

exports.getAllReview=async (req,res)=>{
    try{
      const review=await reviewService.getAllReview(req.params.id);
      if(!review){
        res.status(404).json({message:"Failed to get reviews"})
      }
      res.json(review);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}

exports.createReview=async (req,res)=>{
    try{
      const review=await reviewService.createReview(req.params.id,req.body);
      if(!review){
        res.status(404).json({message:"No review Found"})
      }
    
      res.json(review);
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}
exports.updateReview=async (req,res)=>{
  try{
    const review=await reviewService.updateReview(req.params.id,req.body);
    if(!review){
      res.status(404).json({message:"No review Found"})
    }
  
    res.json(review);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
exports.deleteReview=async (req,res)=>{
  try{
    const review=await reviewService.deleteReview(req.params.id);
    if(!review){
      res.status(404).json({message:"No review Found"})
    }
  
    res.json("review deleted successfully");
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
