const commServices=require('../Services/commServices');
exports.createComment=async(req,res)=>{
    try{
        const comment=await commServices.createComment(req.params.id,req.body);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}