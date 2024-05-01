const User=require('../Models/User');
const jwt=require('jsonwebtoken');
exports.register=async (email,password,role='user')=>{
    const existingUser=await User.findOne({email});
    if(existingUser){
        throw new Error('User already Exists');
    }
    const newUser=new User({email,password,role});
    await newUser.save();
    return 'User registered Successfully';
}
exports.login=async(email,password,role='user')=>{
    const user=await User.findOne({email});
    if(!user){
        throw new Error('Invalid mail');
    }
    user.checkPassword(password , (error,isMatch)=>{
        if(error || !isMatch){
            throw new Error("Invalid Password");
        }
    })
    // console.log(user);
    // console.log(user.role);
    if(role && user.role!==role){
        throw new Error('Invalid role');
    }
    const token=jwt.sign({userId:user._id},'jwt_secret_key',{expiresIn:60*60});
    return token;
}
exports.logout=(req)=>{
    req.session.destroy();
}