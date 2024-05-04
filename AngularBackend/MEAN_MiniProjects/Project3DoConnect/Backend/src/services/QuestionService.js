const Answer = require("../models/answer");
const Comment = require("../models/comment");
const Question=require("../models/question");
const User = require("../models/user");
exports.getAllQuestions=async()=>{
    try{
     
      return await Question.find().populate('answers');
    }
    catch(error){
        throw new Error("Failed to fetch questions.")
    }
}
exports.getQuestionById=async(id)=>{
    try{
      const quest= await Question.findById(id).populate('answers');
      if(!quest){
        throw new Error("Failed to get question");
      }
      return quest;
    }
    catch(error){
        throw new Error("Failed to fetch question.")
    }
}
exports.createQuestion=async(FieldsValue,userid)=>{
    try{
  
        FieldsValue.user=userid;
      const question=new Question(FieldsValue);
      return (await question.save());
    }
    catch(error){
        throw new Error("Failed to create question.")
    }
}
exports.updateQuestion=async(id,updatedValue)=>{
    try{

      return await Question.findByIdAndUpdate(id,updatedValue,{new:true}).populate('answers');
    }
    catch(error){
        throw new Error("Failed to update question.")
    }
}
exports.deleteQuestion=async(id)=>{
    try{
      const ans=await Answer.find({question:id});
      ans.forEach(val=>{
        this.del(val._id);
      })
     await Answer.deleteMany({question:id});
      
      return await Question.findByIdAndDelete(id);
    }
    catch(error){
        throw new Error("Failed to delete question.")
    }
}
exports.del=async(id)=>{
  try{
   await Comment.deleteMany({answer:id});
    
    
  }
  catch(error){
      throw new Error("Failed to delete question.")
  }
}