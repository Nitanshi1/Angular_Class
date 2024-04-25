const ApplicationService = require('../services/applicationServices');

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await ApplicationService.getAllApplications();
        res.json(applications);
    } catch (error) {
        console.error('Failed to fetch applications:', error);
        res.status(500).json({ message: "Failed to fetch applications" });
    }
}

exports.getApplicationById = async (req, res) => {
    try {
        const application = await ApplicationService.getApplicationById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: "No application found" });
        }
        res.json(application);
    } catch (error) {
        console.error('Failed to fetch application:', error);
        res.status(500).json({ message: "Failed to fetch application" });
    }
}

exports.deleteApplication = async (req, res) => {
    try {
        await ApplicationService.deleteApplication(req.user_email, req.params.id);
        res.json({ message: "Application deleted successfully" });
    } catch (error) {
        console.error('Failed to delete application:', error);
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
        console.error('Failed to create application:', error);
        res.status(500).json({ message: "Failed to create application" });
    }
}
