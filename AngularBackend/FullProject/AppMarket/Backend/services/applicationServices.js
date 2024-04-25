
const Application=require('../models/Application');
const User = require('../models/User');
exports.getAllApplications= async ()=>{
   return await Application.find();
}
exports.getApplicationById= async(id)=>{
   return await Application.findById(id);
}
exports.createApplication= async (email, newFields)=>{
   const admin = await User.findOne({email});
   newFields.user = admin_id;
    const newApplication=new Application(newFields);
    return await newApplication.save();
}
exports.updateApplication= async (id,updatedFields)=>{
   return await Application.findByIdAndUpdate(id,updatedFields,{new:true});
}
exports.deleteApplication= async(id)=>{
   return await Application.findByIdAndDelete(id);
}