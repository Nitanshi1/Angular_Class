const ApplicationService = require('../services/applicationServices');
const favService = require('../services/favoriteAppService');

exports.getAllApplications = async (req, res) => {
    try {
        const  {category, appName} = req.query;
        const applications = await ApplicationService.getAllApplications(category, appName);
        res.json(applications);
    } catch (error) {
        console.error('Failed to fetch applications:', error);
        res.status(500).json({ message: "Failed to fetch applications" });
    }
}

exports.getApplicationById = async (req, res) => {
    try {
        const application = await ApplicationService.getApplicationById(req.user_email,req.params.id);
        if (!application) {
            return res.status(404).json({ message: "No application found" });
        }
        res.json(application);
    } catch (error) {
     
        res.status(500).json({ message: error.message });
    }
}

exports.deleteApplication = async (req, res) => {
    try {
        await ApplicationService.deleteApplication(req.user_email, req.params.id);
        await favService.deleteFromFavorites(req.params.id);
        res.json({ message: "Application deleted successfully" });
    } catch (error) {
        
        res.status(500).json({ message: "Failed to delete application" });
    }
}


exports.updateApplication = async (req, res) => {
    try {
        const application = await ApplicationService.updateApplication(req.user_email, req.params.id, req.body);
        if (!application) {
            return res.status(404).json({ message: "No application found" });
        }
        res.json(application);
    } catch (error) {
        console.error('Failed to update application:', error);
        res.status(500).json({ message: "Failed to update application" });
    }
}

exports.createApplication = async (req, res) => {
    try {
        const application = await ApplicationService.createApplication(req.user_email, req.body);
        if (!application) {
            return res.status(404).json({ message: "No application found" });
        }
        res.json(application);
    } catch (error) {
       
        res.status(500).json({ message: "Failed to create application" });
    }
}



