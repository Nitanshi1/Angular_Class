const userService=require('../services/userServices');
exports.getAllUser=async(req,res)=>{
    const users=await userService.getAllUsers();
    console.log(users);
    if(!users){
        res.status(500).json({message:"Users not found..."})
    }
    res.json(users);
}
exports.addToRestricted=async(req,res)=>{
    try{
        const {userid}=req.query;
        await userService.addToRestricted(req.user_email,req.params.id,userid);
        res.status(200).json({message:"User added to restricted..."});
     }
     catch(err){
      res.status(500).json({message:err.message});
     }
}
exports.removeFromRestricted=async(req,res)=>{
    try{
        const {userid}=req.query;
        await userService.removeFromRestricted(req.user_email,req.params.id,userid);
        res.status(200).json({message:"User removed from restricted..."});
     }
     catch(err){
      res.status(500).json({message:err.message});
     }
}