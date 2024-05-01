const Application = require('../Models/Application');


exports.getAllApplications = async () => {
    try {

        return await Application.find().populate('comment');
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

exports.createApplication = async (newFields) => {
    try {
       
        const newApplication = new Application(newFields);
        return await newApplication.save(); 
       
    } catch (error) {
        throw new Error (error);
    }
};



exports.updateApplication = async (id, updatedFields) => {
    try {
       return await Application.findByIdandUpdate(id, updatedFields);

      
    } catch (error) {
        throw new Error (error);
    
    }
};

exports.deleteApplication = async (id) => {
    try {
         return await Application.findByIdAndDelete(id);
   
} catch (error) {
    throw error;
}     
};
