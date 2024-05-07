const Comment=require("../models/comment");

exports.getAllComments=async(id)=>{
    try{
       return await Comment.find({trail:id});
    }
    catch(error){
        throw new Error("Failed to fetch comments.")
    }
}
exports.createComment=async(id,FieldsValue)=>{
    try{
       
        FieldsValue.trail=id;
      const comment=new Comment(FieldsValue);
      return (await comment.save());
    }
    catch(error){
        throw new Error("Failed to create comment.")
    }
}
