const Comment = require("../Models/Comment");
exports.createComment=async(id,newFields)=>{
    try{
        newFields.application=id;
        const comment=new Comment(newFields);
     return await comment.save();
    }
    catch(error){
     throw new Error(error);
    }
 }
