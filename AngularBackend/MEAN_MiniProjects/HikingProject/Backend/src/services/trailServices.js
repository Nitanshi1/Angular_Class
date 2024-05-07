
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
