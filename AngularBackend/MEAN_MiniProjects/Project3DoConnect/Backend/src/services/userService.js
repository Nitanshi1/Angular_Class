const User = require("../models/user");
exports.getAllUsers=async()=>{
    try{
        return await User.find({role:"user"},{email:1,role:1,password:0,status:1});
    }
    catch(error){
        throw new Error("Failed to fetch users..")
    }
}
exports.getUserById=async(id)=>{
    try{
        const user = await User.find({_id:id},{email:1,role:1,password:0,status:1});
        if(!user){
            throw new Error("Failed to get user")
        }
    }
    catch(error){
        throw new Error("Failed to fetch user")
    }
}
exports.updateUser=async(id,updatedValue)=>{
    try{
        return await User.findByIdAndUpdate(id, updatedValue, {new:true});
    }
    catch(error){
        throw new Error("Failed to fetch users..")
    }
}
