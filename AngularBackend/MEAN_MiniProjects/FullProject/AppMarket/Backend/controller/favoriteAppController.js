const favoritesService = require('../services/favoriteAppService');


exports.getAllFavorites = async(req, res)=>{
    try{
       const favApps= await  favoritesService.getAllFavorites(req.user_email);
       res.json(favApps);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.addToFavorites = async(req, res)=>{
    try{
        await  favoritesService.addToFavorites( req.user_email, req.params.id ,);
        res.status(200).json({message:'Application added to favorites'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


exports.removeFromFavorites = async(req, res)=>{
    try{
        await  favoritesService.removeFromFavorites( req.user_email, req.params.id );
       res.status(200).json({message:'Application removed from favorites'});
    }catch(err){
        res.status(500).json({message:error.message});
    }
}