const Answer = require("../models/answer");
const Comment = require("../models/comment");
const Question=require("../models/question");
const User = require("../models/user");
exports.getAllQuestions=async(question)=>{
    try{
      const query={}
      if(question){
        query.question_statement={$regex:new RegExp(question, 'i')};
      }
      query.status="doubtful"
      query.isActive=true
      query.approved=true

     
      return await Question.find(query).populate('answers');
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
exports.createQuestion=async(FieldsValue,id)=>{
    try{
  
        FieldsValue.user=id;
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
      const answers=await Answer.find({question:id});
      for(let ans of answers){
        await Answer.deleteOne({_id:ans.id});
        await Comment.deleteMany({answer:ans.id});
      }

      
      return await Question.findByIdAndDelete(id);
    }
    catch(error){
        throw new Error("Failed to delete question.")
    }
}
