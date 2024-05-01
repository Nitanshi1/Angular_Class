const mongoose=require('mongoose');
// const User=require('../models/User');
const applicationSchema=new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
   },
   restrictedUser:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Application'

}],

    appName:{
       type:String,
       required:true
   },
   description:{
       type:String,
       required:true
   },
   releaseDate:{
    type:Date,
    required:true
   },
   version:{
    type:String,
    default:"1.0"
   },
   ratings:{
    type:Number,
    min:0,
    max:5,
    default:5
   },
   genre:{
    type:String,
    required:true,
    enum:['Games','Beauty','Fashion','Women','Health']
   },
   favCount:{
    type:Number,
    default:0
     },
    viewCount:{
    type:Number,
    default:0,
}

   

})
const Application=mongoose.model('Application',applicationSchema);
module.exports=Application;