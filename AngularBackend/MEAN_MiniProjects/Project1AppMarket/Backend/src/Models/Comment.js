const mongoose=require('mongoose');
const CommentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:'User'
       },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Application'
       },
    content:{
        type:String,
        required:true,
        maxlength: 1000
      },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
    
},{
    //for created and updated at fields
    timestamps: true
});

// define indexed for frequently queried fiels for better perfomance
CommentSchema.index({user: 1, application: 1});


const Comment =mongoose.model('Comment',CommentSchema);
module.exports=Comment;