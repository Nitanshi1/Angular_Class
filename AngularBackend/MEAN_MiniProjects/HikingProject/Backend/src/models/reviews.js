const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    trail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trail",
        required:true
    },
    review_statement:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    }
});

module.exports = mongoose.model('Review', reviewSchema);