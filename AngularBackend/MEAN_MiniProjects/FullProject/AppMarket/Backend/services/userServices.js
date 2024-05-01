const User=require('../models/User');
const Applications=require('../models/Application');

exports.getAllUsers=async()=>{
  return await User.find();
}

 exports.addToRestricted= async(email,appid,userid)=>{
    try{
        const admin=await User.findOne({email});
        const application=await Applications.findById(appid);
        if(application.user.toString()!==admin._id.toString()){
           throw new Error("Forbidden");
        }
        application.restrictedUser.push(userid);
        application.save();
        return application.restrictedUser;
       
    }
    catch(error){
      throw new Error(error.message);
    }
  }
  exports.removeFromRestricted= async(email,appid,userid)=>{
    try{
        const admin=await User.findOne({email});
        const application=await Application.findById(appid);
        if(application.user.toString()!==admin._id.toString()){
           throw new Error("Forbidden");
        }
        application.restrictedUser=application.restrictedUser.filter((user)=>{
            user.toString()!==userid.toString();
        })
        application.save();
      
       
    }
    catch(error){
      throw new Error(error.message);
    }
  }