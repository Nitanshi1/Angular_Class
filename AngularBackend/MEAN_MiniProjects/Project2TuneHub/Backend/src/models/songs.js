const mongoose = require('mongoose');
const songsSchema = new mongoose.Schema({
    songName:{
        type: String,
        required: true,
        trim: true
    },
    singer:{
        type:String,
        required: true,

    },
    musicDirector:{
        type:String,
        required: true
    },
    releaseDate:{
        type:Date,
        required:true
       },
    Albumname:{
        type:String,
        required:true
       },

},
{
    timestamps:true,
   
});
const Songs=mongoose.model('Songs',songsSchema);
module.exports=Songs;