const commServices=require('../Services/commServices');
exports.getComments=async(req,res)=>{
    try{
        const comment=await commServices.getCommentsComment(req.params.id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}

exports.createComment=async(req,res)=>{
    try{
        const comment=await commServices.createComment(req.params.id,req.body,req.user._id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteComment=async(req,res)=>{
    try{
        const comment=await commServices.deleteComment(req.params.id);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}

