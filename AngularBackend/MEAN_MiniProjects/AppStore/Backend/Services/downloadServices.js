
const User = require('../Models/User');
const Comment = require('../Models/Comment');



exports.addToDownload = async(email, appId) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        user.downloadApplications.push(appId);
        await user.save();
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.deleteFromDownload = async (id) => {
    try {
        const users = await User.find();
        for (const user of users) {
            if (user.downloadApplications && user.downloadApplications.includes(id)) {
                await exports.removeFromDownload(user.email, id); // Fixed function call
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.uninstallApp = async(email, appId) => { 
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
    
        user.downloadApplications = user.downloadApplications.filter(app => app.toString() !== appId);
        await user.save();
    } catch (error) {
        throw error;
    }
}

exports.getAllDownloadedApps = async(email) => {
    try {
        const user = await User.findOne(email).populate('downloadApplications'); 
            throw new Error('User not found');
            return user.downloadApplications;
        }
    catch (error) {
        throw error;
    }
}
