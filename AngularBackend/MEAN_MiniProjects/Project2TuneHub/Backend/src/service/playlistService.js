const Playlist=require('../models/playlist');
const Songs=require('../models/songs')
exports.getAllPlayList=async()=>{
    try{
     return await Playlist.find({user:id});
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.getPlayListById=async(id,songName)=>{
     try{
      if(songName){
         const name=songName;
         console.log(name);
         const songsinPlaylist=[];
         if(name){
            const song = await Songs.find({songName:{$regex: new RegExp(name, "i")}});
            console.log(song)   ;
            for(let s of song){
               if(await Playlist.find({_id:id, songs:s_id})){
                  songsinPlaylist.push(s._id);
               }
            }
         }
         console.log(songsinPlaylist)
         return songsinPlaylist;
      }
      console.log(await Playlist.findById(id));
      return await Playlist.findById(id);
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.createPlaylist=async(newFields,id)=>{
     try{
         newFields.user=id
         const playlist=new Playlist(newFields);
      return await playlist.save();
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.updateplaylist=async(id,updatedFields)=>{
     try{
      return await Playlist.findByIdAndUpdate(id,updatedFields,{new:true});
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.deleteplaylist=async(id)=>{
     try{
      return await Playlist.findByIdAndDelete(id);
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.addToPlayList=async(pid,sid)=>{
   try{
      
      return await Playlist.updateOne({_id:pid},{$addToSet:{songs:sid}});

   }
   catch(error){
      throw new Error(error);
   }
  }
  exports.removeFromPlayList=async(pid,sid)=>{
   try{
      
      return await Playlist.updateOne({_id:pid},{$pull:{songs:sid}});

   }
   catch(error){
      throw new Error(error);
   }
  }