const playlistService=require('../service/playlistService')
exports.getAllPlaylist=async(req,res)=>{
    try{
        console.log(req.user._id);

        const playlist=await playlistService.getAllPlayList(req.user._id);
       if(!playlist){
         res.json("playlist not found");
       }
       res.json(playlist)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.getPlaylistById=async(req,res)=>{
    try{
        const songName=req.query.name;
        const playlist=await playlistService.getPlayListById(req.params.id,songName);
       if(!playlist){
         res.json("playlist not found");
       }
       res.json(playlist)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.createplaylist=async(req,res)=>{
    try{
        const Playlist=await playlistService.createPlaylist(req.body,req.user._id);
       if(!Playlist){
         res.json("Playlist is not created");
       }
       res.json(Playlist);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.updatePlaylist=async(req,res)=>{
    try{
        const playlist=await playlistService.updateplaylist(req.params.id,req.body);
       if(!playlist){
         res.json("failed to update");
       }
       res.json(playlist)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteplaylist=async(req,res)=>{
    try{
        const playlist=await playlistService.deleteplaylist(req.params.id);
       if(!playlist){
         res.json("playlist not found");
       }
       res.json("playlist deleted successfully")
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.addToPlayList=async(req,res)=>{
    try{
     const playlist=await playlistService.addToPlayList(req.params.pid,req.params.sid);
     if(!playlist){
        res.json("playlist not found");
      }
      res.json(playlist);
    }
    catch(error){
        res.json({message:error.message})
    }
}
exports.removeFromPlaylist=async(req,res)=>{
    try{
     const playlist=await playlistService.removeFromPlayList(req.params.pid,req.params.sid);
     if(!playlist){
        res.json("playlist not found");
      }
      res.json(playlist);
    }
    catch(error){
        res.json({message:error.message})
    }
}