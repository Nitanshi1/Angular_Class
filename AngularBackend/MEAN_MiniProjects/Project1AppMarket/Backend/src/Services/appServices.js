const Comment = require('../Models/Comment');         
const Application = require('../Models/Application');
const User = require('../Models/User');


exports.getAllApplications = async (filters) => {
    try {
        const {category, appName} = filters;
        let query = {};
        if (category) {
            query.genre = category;
        }
        if (appName) {
            query.appName = { $regex: new RegExp(appName, 'i') };
        }
        query.visibility=true;
        return await Application.find(query).populate('comment');
    } catch (error) {
        throw new Error(error);
    }
};

exports.getApplicationById = async (id) => {
    try {
        return await Application.findById(id);
    } catch (error) {
        throw new Error(error);
    }
};

exports.createApplication = async (newFields, id) => {
    try {
        newFields.user=id;
        const newApplication = new Application(newFields);
        return await newApplication.save(); 
       
    } catch (error) {
        throw new Error (error);
    }
};



exports.updateApplication = async (id, updatedFields) => {
    try {

        const application = Application.findById(id);
        if(application.visibility==true && updatedFields.visibility == false)
        await User.updateMany({downloadedApplications:id},{$pull:{downloadedApplications:id}});
       return await Application.findByIdandUpdate(id, updatedFields);

      
    } catch (error) {
        throw new Error (error);
    
    }
};

exports.deleteApplication = async (id) => {
    try {

        await Comment.deleteMany({application:id});
        await User.updateMany({downloadedApplications:id},{$pull:{downloadedApplications:id}});
         return await Application.findByIdAndDelete(id);
   
} catch (error) {
    throw new Error (error);
}     
};
