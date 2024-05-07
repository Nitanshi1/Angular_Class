const mongoose = require('mongoose');
const trailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{ 
        type: String, 
        required: true
     },
    difficulty: { 
        type: String,
         enum: ['easy', 'moderate', 'difficult'], 
         required: true 
        },
    length: {
         type: Number,
         required: true,
         min:0
        },
    elevationGain: { 
        type: Number,
        required: true,
        min:0
        },
    description: {
        type: String

    },
},
    {
        timestamps:true,
        toObject:{virtuals:true},
        toJSON:{virtuals:true}
    })
    trailSchema.virtual('comments', {
        'ref': 'Comment',
        localField: '_id',
        foreignField: 'trail',
    });
    trailSchema.virtual('reviews', {
        'ref': 'Review',
        localField: '_id',
        foreignField: 'trail',
    });

const Trail= mongoose.model('Trail', trailSchema);
module.exports = Trail;
