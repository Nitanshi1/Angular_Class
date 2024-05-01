const authServices = require('../Services/authServices');

exports.register = async(req,res)=>{
    const {email, password, role}= req.body;
    try{
         const message = await authServices.register(email,password,role);
         res.status(201).json({message});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
exports.login = async(req, res)=>{
    const {email, password, role}= req.body;
    try{
         const token = await authServices.login(email,password,role);
         req.session.authorization ={
            token,
            email
         }
         res.status(200).json({message:'User login Successfully'});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.logout = (req, res)=>{
    try{
         authServices.logout(req);
         res.status(200).json({message:'logged out successfully..'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}