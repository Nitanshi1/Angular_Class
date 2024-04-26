const Application = require('../models/Application');
const User = require('../models/User');

exports.getAllApplications = async (category, appName) => {
    try {
        let query = {};
        if (category) {
            query.genre = category;
        }
        if (appName) {
            query.appName = { $regex: new RegExp(appName, 'i') };
        }
        return await Application.find(query).populate('user');
    } catch (error) {
        throw new Error('Failed to fetch the applications');
    }
}

exports.getApplicationById = async (email,id) => {
    const user=await User.findOne({email});
   const app=await Application.findById(id);
   if(app.restrictedUser.includes(user._id)){
      throw new Error('Forbidden');
   }
    return app;
   
}

exports.createApplication = async (email, newFields) => {
    const admin = await User.findOne({ email });
    if (!admin) {
        throw new Error('Admin not found');
    }
    newFields.user = admin._id;
    const newApplication = new Application(newFields);
    return await newApplication.save();
}

exports.updateApplication = async (email, id, updatedFields) => {
    const admin = await User.findOne({ email });
    if (!admin) {
        throw new Error('Admin not found');
    }
    const application = await Application.findById(id);
    if (!application) {
        throw new Error('Application not found');
    }
    if (application.user.toString() !== admin._id.toString()) {
        throw new Error('Forbidden');
    }
    return await Application.findByIdAndUpdate(id, updatedFields, { new: true });
}

exports.deleteApplication = async (email, id) => {
    const admin = await User.findOne({ email });
    if (!admin) {
        throw new Error('Admin not found');
    }
    const application = await Application.findById(id);
    if (!application) {
        throw new Error('Application not found');
    }
    if (application.user.toString() !== admin._id.toString()) {
        throw new Error('Forbidden');
    }
    return await Application.findByIdAndDelete(id);
};
