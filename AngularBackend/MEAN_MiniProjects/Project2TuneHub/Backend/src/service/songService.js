const Songs=require('../models/songs');
exports.getAllSongs=async()=>{
    try{
     return await Songs.find();
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.getSongById=async(id)=>{
     try{
      return await Songs.findById(id);
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.createSong=async(newFields)=>{
     try{
         const song=new Songs(newFields);
      return await song.save();
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.updateSong=async(id,updatedFields)=>{
     try{
      return await Songs.findByIdAndUpdate(id,updatedFields,{new:true});
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.deleteSong=async(id)=>{
     try{
      return await Songs.findByIdAndDelete(id);
     }
     catch(error){
      throw new Error(error);
     }
  }