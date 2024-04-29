const Application = require('../Models/Application');
const User = require('../Models/User');
const Comment = require('../Models/Comment'); // Add Comment model require

exports.getAllApplications = async (filters) => {
    try {
        let query = { visibility: true };
        if (filters) {
            if (filters.category) {
                query.genre = filters.category;
            }
            if (filters.appName) {
                query.appName = { $regex: new RegExp(filters.appName, 'i') };
            }
            if (filters.minRating && filters.maxRating) {
                query.ratings = { $gte: filters.minRating, $lte: filters.maxRating };
            } else if (filters.minRating) {
                query.ratings = { $gte: filters.minRating };
            } else if (filters.maxRating) {
                query.ratings = { $lte: filters.maxRating };
            }
        }
        // Perform a database query and return the result
        return await Application.find(query);
    } catch (error) {
        throw error;
    }
};

exports.getApplicationById = async (appId) => {
    try {
        const application = await Application.findOne({ _id: appId, visibility: true });
        if (!application) {
            throw new Error('Application not found');
        }
        return application; // Corrected return statement
    } catch (error) {
        throw error;
    }
};

exports.createApplication = async (userId, newFields) => {
    try {
        newFields.user = userId; // Corrected assignment
        const newApplication = new Application(newFields);
        const createdApplication = await newApplication.save(); // Renamed variable for consistency
        return createdApplication;
    } catch (error) {
        throw error;
    }
};



exports.updateApplication = async (userId, appId, updatedFields) => {
    try {
        const application = await Application.findById(appId);

        
        if (!application) {
            throw new Error('Application not found');
        }
        
        if (application.user.toString() !== userId) {
            throw new Error('Unauthorized');
        }
        if(updatedFields.visibility === false && application.visibility === true){
            await User.updateMany({ downloadApplications: appId},{$pull: { downloadApplications: appId}})
        }

        
        const updatedApplication = await Application.findByIdAndUpdate(appId, updatedFields, { new: true });

        
        return updatedApplication;
    } catch (error) {
        throw error;
    }
};

exports.deleteApplication = async (userId, appId) => {
    try {
    const application = await Application.findById(appId);
    if (!application) {
        throw new Error('Application not found');
    }
    if (application.user.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    const deletedApplications = await Application.findByIdAndDelete(appId);
    await Comment.deleteMany({application: appId});

    await User.updateMany(
        {downloadApplications: appId},
        { $pull: {downloadApplications: appId}}
    );
    return deletedApplications;
} catch (error) {
    throw error;
}     

};
exports.getCreatedApps = async(adminUserId)=>{
    try{
        const createdApps= await Application.find({user_id: adminUserId});
        return createdApps;
    }catch(error){
        console.error('Error in getCreatedApps', error.message);
        throw new Error('failed to retrieved the applications');

    }
};