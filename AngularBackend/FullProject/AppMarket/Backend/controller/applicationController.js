const ApplicationService = require('../services/applicationServices');


exports.getAllApplications = async(req,res)=>{
    try{
         const application = await ApplicationService.getAllApplications();
         res.json(application);
    }
    catch(error){
        res.status(500).json({message:'Failed to fetch applications'});
    }
}

exports.getAllApplicationsById = async(req,res)=>{
    try{
         const application = await ApplicationService.getAllApplicationsById(req.params.id);
         if(!application){
            res.status(404).json({message:'Failed to fetch applications'});
         }
         res.json(application);
    }
    catch(error){
        res.status(500).json({message:'Failed to fetch applications'});
    }
}

exports.deleteApplication = async(req,res)=>{
    try{
         const application = await ApplicationService.deleteApplication(req.params.id);
         
         res.json({message:"Application Deleted Successfully:"});
    }
    catch(error){
        res.status(500).json({message:'Failed to delete applications'});
    }
}

exports.updateApplication = async(req,res)=>{
    try{
         const application = await ApplicationService.updateApplication(req.params.id, req.body);
         if(!application){
            res.satus(404).json({message:'Application not found'});
         }
         res.json(application);
    }
    catch(error){
        res.status(500).json({message:'Failed to update applications'});
    }
}

exports.createApplication = async(req,res)=>{
    try{
         const application = await ApplicationService.createApplication( req.body);
         if(!application){
            res.satus(404).json({message:'Application not found'});
         }
         res.json(application);
    }
    catch(error){
        res.status(500).json({message:'Failed to create applications'});
    }
}
