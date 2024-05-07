
const Review = require('../models/reviews');

exports.getAllReview=async(id)=>{
    try{
       return await Review.find({trail:id});
    }
    catch(error){
        throw new Error("Failed to fetch review.")
    }
}
exports.createReview=async(id,FieldsValue)=>{
    try{
       
        FieldsValue.trail=id;
      const review=new Review(FieldsValue);
      return (await review.save());
    }
    catch(error){
        throw new Error("Failed to create review.")
    }
}
exports.updateReview=async(id,update)=>{
    try{
       return await Review.findByIdAndUpdate(id,update,{new:true});
    }
    catch(error){
        throw new Error("Failed to update review.")
    }
}
exports.deleteReview=async(id)=>{
    try{
       return await Review.findByIdAndDelete(id);
    }
    catch(error){
        throw new Error("Failed to delete review.")
    }
}