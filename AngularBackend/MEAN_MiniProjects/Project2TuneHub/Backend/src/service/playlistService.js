const Playlist=require('../models/playlist');
exports.getAllPlayList=async()=>{
    try{
     return await Playlist.find();
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.getPlayListById=async(id)=>{
     try{
      return await Playlist.findById(id);
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.createPlaylist=async(newFields)=>{
     try{
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