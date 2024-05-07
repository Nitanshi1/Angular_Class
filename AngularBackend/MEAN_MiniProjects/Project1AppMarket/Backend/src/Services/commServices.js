const Comment = require("../Models/Comment");
const Application = require("../Models/Application")
exports.getComment=async(id)=>{
    try{
       
     return await Application.findById(id).comment;
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.createComment=async(id, newFields, userid)=>{
    try{
        newFields.user=userid;
        newFields.application=id;
       
        const comment=new Comment(newFields);
     return await comment.save();
    }
    catch(error){
     throw new Error(error);
    }
 }

 exports.deleteComment=async(id)=>{
    try{
        
     return await Comment.deleteOne({_id:id});
    }
    catch(error){
     throw new Error(error);
    }
 }

