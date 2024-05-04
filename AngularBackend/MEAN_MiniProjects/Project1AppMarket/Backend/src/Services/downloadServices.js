const Application = require("../Models/Application");
const User = require("../Models/User");

exports.getDownloads=async(id)=>{
    try{
        const user=await User.findById(id);
        if(!user){
            res.json({message:"User not found"});
        }           
     return user.downloadedApplications;
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.addtoDownloads=async(id1,id2)=>{
    try{
         const application = await Application.findById(id2);
         application.incrementDownloadCount();
         await User.updateOne({_id:id1},{$addToSet:{downloadedApplications:id2}});
         const user=await User.findById(id1);
         return user.downloadedApplications;
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.removefromDownloads=async(id1,id2)=>{
    try{
         const application=await Application.findById(id2);
         application.decrementDownloadCount();
         await User.updateOne({_id:id1},{$pull:{downloadedApplications:id2}});
         const user=await User.findById(id1);
         return user.downloadedApplications;
    }
    catch(error){
     throw new Error(error);
    }
 }