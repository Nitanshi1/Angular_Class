
const jwt=require('jsonwebtoken');
let User=require('../models/User')
exports.authenticate=(req,res,next)=>{
    if(req.session.authorization){
      const token=req.session.authorization['token'];
      if(!token){
        return res.status(401).json({message:"Unauthorized"});
      }
      jwt.verify(token,'jwt_secret_key',(error,user)=>{
        if(error){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user_email=req.session.authorization['email'];
        next();
      })
    }
    else{
        return res.status(403).json({message:"User not logged in"})
    }
}
exports.authorize=(requiredRole)=>async(req,res,next)=>{
  const user_email=req.user_email;
  let user= await User.findOne({email:user_email});
  if(!user){
    return res.status(401).json({message:"Unauthorized"})
  }
  if(user.role!==requiredRole){
    return res.status(403).json({message:"Forbidden"});
  }
  next();
}