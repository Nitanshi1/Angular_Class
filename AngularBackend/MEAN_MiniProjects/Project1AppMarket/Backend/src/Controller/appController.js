const applicationServices = require('../Services/appServices');

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await applicationServices.getAllApplications(req.query);
 
         if(!applications){
            res.json("applications not found.")
         }
       
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const {id } = req.params;
        const application = await applicationServices.getApplicationById(id);
        if(!application){
            res.json("application not found.")
         }
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        
        const newApplication = req.body; 
        const createdApplication = await applicationServices.createApplication( newApplication,req.user._id);
        if(!newApplication){
            res.json("application not createed.")
         }
        res.status(201).json(createdApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        
        const updatedFields = req.body; 
        const updatedApplication = await applicationServices.updateApplication( req.params.id, updatedFields);
        if(!updatedApplication){
            res.json("applications not updated..")
         }
        res.json(updatedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const {id } = req.params.id;
        const deletedApplication = await applicationServices.deleteApplication(id);
        if(!this.deleteApplication){
            res.json("applications not deleted.")
         }
        res.json(deletedApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


