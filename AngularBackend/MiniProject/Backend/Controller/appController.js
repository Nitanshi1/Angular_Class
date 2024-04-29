const applicationServices = require('../Services/appServices');

const { validationResult } = require('express-validator');

exports.getAllApplications = async (req, res) => {
    try {
        const filters = req.query; // Assuming filters are passed as query parameters
        const applications = await getAllApplications(filters);
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const { appId } = req.params;
        const application = await getApplicationById(appId);
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        const { userId } = req.body; // Assuming userId is obtained from request body
        const newApplication = req.body; // Assuming all fields for creating application are provided in request body
        const createdApplication = await createApplication(userId, newApplication);
        res.status(201).json(createdApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const { userId, appId } = req.params;
        const updatedFields = req.body; // Assuming updated fields are provided in request body
        const updatedApplication = await updateApplication(userId, appId, updatedFields);
        res.json(updatedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const { userId, appId } = req.params;
        const deletedApplication = await deleteApplication(userId, appId);
        res.json(deletedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCreatedApps = async (req, res) => {
    try {
        const { adminUserId } = req.params;
        const createdApps = await getCreatedApps(adminUserId);
        res.json(createdApps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
