const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//changing the hashvalue for passwrd and data

const userSchema = new mongoose.Schema({
   email:{
    type: String,
    required: true,
    unique:true,
    lowercase:true
   },
   password:{
    type:String,
    required:true

   },
   role:{
    type:String,
    enum:['admin','user'],
    default:'user'
   }
})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password.salt);
        this.password = hashedPassword;
    }
    catch(error){
        next(error);
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{

        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword;
        next();

    }catch(error){
        next(error);
    }
})

userSchema.methods.checkPassword = function(password, done){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        done(err, isMatch);
    })
}

const User = mongoose.model('User', userSchema);

module.exports = User;
