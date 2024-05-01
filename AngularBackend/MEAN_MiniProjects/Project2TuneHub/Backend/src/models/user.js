const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
  
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    }
  
},
{
    timestamps:true,
    toJSON: {virtuals: true},
    toObject : { virtuals: true}
});
userSchema.virtual('CreatedPlaylist'),{
    'ref': 'Playlist',
    localField: '_id',
    foreignField: 'User'
  } 

const User=mongoose.model('User',userSchema);
module.exports=User;