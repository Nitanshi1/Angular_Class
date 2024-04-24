const User = require('../models/User');

exports.register = async (email, password, role='user')=>{
   const existingUser = await User.findOne({email});
   if(existingUser){
    throw new Error('User already Exists');

   }
   const newUser = new User({email, password , role});
   await newUser.save();
   return 'User registered Successfully!';
}
exports.login = async(email, password, role='user')=>{
    
}