const userService = require('../services/userService');
exports.getAllUsers = async(req, res)=>{
    try{
        const users = await userService.getAllUsers();
        if(!users){
            res.status(404).json({message:"Failed to get Users"})
        }
        res.json(users);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
exports.getUserById= async(req, res)=>{
    try{
        const user = await userService.getUserById(req.params.id);
        if(!user){
            res.status(404).json({message:"Failed to get User"})
        }
        res.json(user);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.updateUser= async(req, res)=>{
    try{
        const user = await userService.updateUser(req.params.id, req.body);
        if(!user){
            res.status(404).json({message:"No user Found"})
        }
        res.json(user);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}