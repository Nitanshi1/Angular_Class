
const Pets = require('../Models/Pets')

exports.getAllPets = async () => {
  try {
    return await Pets.find();
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPetById = async (petId) => {
  try {
    return await Pets.findById(petId);
  } catch (error) {
    throw new Error(error);
  }
};

exports.addPet = async (petnewData) => {
  try {
    const pet = new Pets(petnewData);
    return await pet.save();
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePet = async (petId, petnewData) => {
  try {
    return await Pets.findByIdAndUpdate(petId, petnewData, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

exports.deletePet = async (petId) => {
  try {
    await Pets.findByIdAndDelete(petId);
  } catch (error) {
    throw new Error(error);
  }
};


exports.getPetsBySpecies = async (sp) => {
  try {
    return await Pets.find({species:sp});
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPetsAge = async (minAge, maxAge) => {
  try {
    return await Pets.find({ age: { $gte: minAge, $lte: maxAge } });
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPetsAvailability = async () => {
  try {
    return await Pets.find({ adoptionStatus: 'available' });
  } catch (error) {
    throw new Error(error);
  }
};

exports.getPetsVaccinated = async () => {
  try {
    return await Pets.find({ vaccinated: 'true' });
  } catch (error) {
    throw new Error(error);
  }
};

exports.adoptPets = async (petId, adoptionStatus) => {
  try {
    await Pets.findByIdAndUpdate(petId,adoptionStatus, {new:true});
  } catch (error) {
    throw new Error(error);
  }
};

exports.vaccinatePets = async (petId, vaccinated) => {
  try {
    await Pets.findByIdAndUpdate(petId, vaccinated, {new:true});
  } catch (error) {
    throw new Error(error);
  }
};

exports.changePetImage = async (petId, imageUrl) => {
  try {
    await Pets.findByIdAndUpdate(petId,imageUrl, {new:true});
  } catch (error) {
    throw new Error(error);
  }
};
