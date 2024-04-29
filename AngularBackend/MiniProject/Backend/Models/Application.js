const mongoose=require('mongoose');
const applicationSchema=new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
   },


    appName:{
       type:String,
       required:true,
       trim:true,
       lowercase:true
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
   },

   downloadCount:{
    type: Number,
    default:0
   },
   visibility:{
    type: Boolean,
    default: true
   }

   

},{
    timestamps:true,
    toJSON: {virtuals: true},
    toObject:{ virtuals: true}
});

applicationSchema.virtual('comments',{
    'ref':'Comment',
    localField:'_id',
    foreignField:'application'
});

applicationSchema.virtual('averageRating').get(function(){
       const totalRatings = this.comment.length;
       if(totalRatings === 0 ) return 0;

       const totalSum = this.comment.reduce((sum, comment) => sum + comment.ratings,0);
       return totalSum/ totalRatings;
});


applicationSchema.methods.incrementDownloadCount = function(){
    this.downloadCount++;
    return this.save();
};
const Application=mongoose.model('Application',applicationSchema);
module.exports=Application;