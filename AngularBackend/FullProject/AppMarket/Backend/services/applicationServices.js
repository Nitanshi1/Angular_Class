const Application=require('../models/Application');
const User = require('../models/User');
exports.getAllApplications= async ()=>{
   const applications =  await Application.find().populate('user');
   return applications;
}
exports.getApplicationById= async(id)=>{
   return await Application.findById(id);
}
exports.createApplication= async (email, newFields)=>{
   const admin = await User.findOne({email});
    newFields.user = admin._id;
    const newApplication=new Application(newFields);
    return await newApplication.save();
}



exports.updateApplication= async (email, id,updatedFields)=>{
   const admin = await User.findOne({email});
   const application = await Application.findById(id);
   // console.log('Application user: ', application.user)
   // console.log('Admin Id: ', admin._id);
   // console.log(application.user !== admin._id);
   if(application.user.toString() !== admin._id.toString()){
      throw new Error('Forbidden');
   }
   return await Application.findByIdAndUpdate(id, updatedFields, {new:true});
}
exports.deleteApplication= async(email, id)=>{
   const admin = await User.findOne({email});
   const application = await Application.findById(id);
  
   if(application.user.toString() !== admin._id.toString()){
      throw new Error('Forbidden');
   }
   return await Application.findByIdAndDelete(id);
}