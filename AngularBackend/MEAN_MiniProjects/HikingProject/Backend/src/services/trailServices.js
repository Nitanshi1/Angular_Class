
const Trail = require('../models/trails');



exports.getAllTrails = async () => {
    try {
        const trails = await Trail.find();
        return trails;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.getTrailById = async (id) => {
    try {
        const trail = await Trail.findById(id);
        if (!trail) {
            throw new Error('Trail not found');
        }
        return trail;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.createTrail = async (trailData) => {
    try {
        const newTrail = await Trail.create(trailData);
        return newTrail;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.updateTrail = async (id, updatedTrailData) => {
    try {
        const updatedTrail = await Trail.findByIdAndUpdate(id, updatedTrailData, { new: true });
        if (!updatedTrail) {
            throw new Error('Trail not found');
        }
        return updatedTrail;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.deleteTrail = async (id) => {
    try {
        const deletedTrail = await Trail.findByIdAndDelete(id);
        if (!deletedTrail) {
            throw new Error('Trail not found');
        }
        return { message: 'Trail deleted' };
    } catch (err) {
        throw new Error(err.message);
    }
};
exports.filter=async(filter)=>{
    try{
       const query={};
       const {difficulty,minLength,maxLength,minElevation,maxElevation}=filter  
       if(difficulty){
          query.difficulty={$regex:new RegExp(difficulty,'i')}
       }
       if(minLength){
          query.length={$gte:minLength}
       }
       if(maxLength){
          query.length={$lte:maxLength}
       }
       if(minElevation){
          query.elevationGain={$gte:minElevation}
       }
       if(maxElevation){
          query.elevationGain={$lte:maxElevation}
       }
     return await Trail.find(query).populate('comments').populate('reviews');
    }
    catch(error){
     throw new Error(error);
    }
 }

 exports.getTopRatedTrails = async () => {
    try {
      
        const topRatedTrails = await Trail.find().sort({ averagRating: -1 }).limit(1); 
        return topRatedTrails;
    } catch (error) {
        throw new Error(error);
    }
};