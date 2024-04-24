const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
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
        default:0
     },
     genre:{
        type:String,
        required:true,
        enum:['Games','Beauty','Fashion','Women','Health']
     }
})
const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;