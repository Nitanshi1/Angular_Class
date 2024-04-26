const User= require('../models/User')




exports.getAllFavorites = async(email)=>{
     try{
         const user = await User.findOne({email}).populate('favoriteApplications');
         //used for entire data details...like previous wwithour populate it shown only id
         return user.favoriteApplications;
     }catch(error){
        throw new Error(error.message);
     }
}


exports.addToFavorites = async(email, appId)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error('User not found');
        }
        user.favoriteApplications.push(appId);
        await user.save();
       
    }catch(error){
       throw new Error(error.message);
    }
}


exports.removeFromFavorites = async (email, appId) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        // Remove the application from the favoriteApplications array
        user.favoriteApplications = user.favoriteApplications.filter(app => app.toString() !== appId);
        await user.save();
    } catch (error) {
        throw new Error(error.message);
    }
}

// exports.deleteFromFavorites=async(id)=>{
//     try{
//       const user =await User.find();
//       user.forEach((user)=>{
//        if(user.favoriteApplication.includes(id)){
//           this.removeFromFavorites(user.email,id);
//        }
//       })
//     }
//     catch(error){
//        throw new Error(error.message);
//     }
//   }
  exports.deleteFromFavorites = async (id) => {
    try {
        const users = await User.find();
        for (const user of users) {
            if (user.favoriteApplications && user.favoriteApplications.includes(id)) {
                await removeFromFavorites(user.email, id);
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


