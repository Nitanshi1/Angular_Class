const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
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
  },

  downloadApplications:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Application'

  }]
},{
  toJSON: {virtuals: true},
  toObject : { virtuals: true}
});

userSchema.virtual('createdApplications'),{
  'ref': 'Application',
  localField: '_id',
  foreignField: 'user'
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(this.password,salt);
      this.password=hashedPassword;
      next();
    }
    catch(error){
        next(error)
    }
})

userSchema.methods.checkPassword = async function(password) {
    try {
        const isMatch = await bcrypt.compare(password, this.password);
        return isMatch;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const User=mongoose.model('User',userSchema);
module.exports=User;