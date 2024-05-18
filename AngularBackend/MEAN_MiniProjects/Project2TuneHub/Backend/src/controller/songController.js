const songService=require('../service/songService');
exports.getAllSongs=async(req,res)=>{
    try{
        const songs=await songService.getAllSongs();
       if(!songs){
         res.json("song not found");
       }
       res.json(songs)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.getSongById=async(req,res)=>{
    try{
        const song=await songService.getSongById(req.params.id);
       if(!song){
         res.json("song not found");
       }
       res.json(song)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.createSong=async(req,res)=>{
    try{
        const song=await songService.createSong(req.body);
        console.log(song)
       if(!song){
         res.json("song not created");
       }
       res.json(song);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.updateSong=async(req,res)=>{
    try{
        const song=await songService.updateSong(req.params.id,req.body);
       if(!song){
         res.json("failed to update");
       }
       res.json(song)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteSong=async(req,res)=>{
    try{
        const song=await songService.deleteSong(req.params.id);
       if(!song){
         res.json("song not found");
       }
       res.json("song deleted successfully")
    }
    catch(error){
        res.json({message:error.message});
    }

}