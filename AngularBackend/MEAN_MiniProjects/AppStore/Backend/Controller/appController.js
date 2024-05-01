const applicationServices = require('../Services/appServices');



exports.getAllApplications = async (req, res) => {
    try {
        // const filters = req.query; // Assuming filters are passed as query parameters
        const applications = await applicationServices.getAllApplications();
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const { appId } = req.params;
        const application = await applicationServices.getApplicationById(appId);
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        // Assuming userId is obtained from request body
        const newApplication = req.body; // Assuming all fields for creating application are provided in request body
        const createdApplication = await applicationServices.createApplication(req.user_email, newApplication);
        res.status(201).json(createdApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        
        const updatedFields = req.body; // Assuming updated fields are provided in request body
        const updatedApplication = await applicationServices.updateApplication(req.user_email, req.params.appId, updatedFields);
        res.json(updatedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const {appId } = req.params.appId;
        const deletedApplication = await applicationServices.deleteApplication(req.user_email, appId);
        res.json(deletedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCreatedApps = async (req, res) => {
    try {
        const { adminUserId } = req.params.id;
        const createdApps = await applicationServices.getCreatedApps(adminUserId);
        res.json(createdApps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
