const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    question_statement:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["doubtful","solved"],
        default:"doubtful"
    },
    isActive:{
        type:Boolean,
        default:true
    },
    approved:{
        type:Boolean,
        default:true
    },
   
   
},{
    timestamps:true,
    toJSON: {virtuals: true},
    toObject:{ virtuals: true}
}
);

questionSchema.virtual('answers', {
    'ref': 'Answer',
    localField: '_id',
    foreignField: 'question',
});

const Question=mongoose.model('Question',questionSchema);
module.exports=Question;