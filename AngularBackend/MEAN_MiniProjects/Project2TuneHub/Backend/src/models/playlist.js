const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
       },
     songs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'song'
    
    }],
    playlist_name:{
        type:String,
        required:true
    }
});

const Playlist=mongoose.model('Playlist',playlistSchema);
module.exports=Playlist;