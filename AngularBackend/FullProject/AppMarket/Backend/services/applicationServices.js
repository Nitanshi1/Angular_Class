const  Application = require('../models/Application')


exports.getAllApplications = async ()=>{
   return await Application.find();
}


exports.getAllApplicationsById = async (id)=>{
    return await Application.findById(id);

}


exports.createApplication = async (newFields)=>{
    const newApplication = new Application(newFields);
    return await newApplication.save();
}

exports.updateApplication = async(id,updatedFields)=>{
    return await Application.findByIdAndUpdate(id, updatedFields, {new:true});

}
exports.deleteApplication = async(id)=>{
    return await Application.findByIdAndDelete(id);

}