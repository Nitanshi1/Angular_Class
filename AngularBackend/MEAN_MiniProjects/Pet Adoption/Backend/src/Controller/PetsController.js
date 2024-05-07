
const petsService = require('../Services/PetsService')

exports.getPets = async (req, res) => {
  try {
    const pets = await petsService.getAllPets();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await petsService.getPetById(req.params.petId);
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPet = async (req, res) => {
  try {
    const pet = await petsService.addPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const updatedPet = await petsService.updatePet(req.params.petId, req.body);
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await petsService.deletePet(req.params.petId);
    res.json({ message: 'Pet deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getPetsBySpecies= async(req, res)=>{
    try{
        const species = req.params.species;
        const pets = await petsService.getPetsBySpecies(species);
        res.json(pets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
exports.getPetsAge = async (req, res) => {
    try {
        const minAge = parseInt(req.params.minAge);
        const maxAge = parseInt(req.params.maxAge);
        const pets = await petsService.getPetsAge(minAge, maxAge);
      res.json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

exports.getPetsAvailability=async (req, res) => {
    try {
      const pets = await petsService.getPetsAvailability();
      res.json(pets)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
exports.getPetsVaccinated=async (req, res) => {
    try {
      const pets = await petsService.getPetsVaccinated();
      res.json(pets)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  
exports.adoptPets = async (req, res) => {
    try {
      await petsService.adoptPets(req.params.petId,req.body);
      res.json({ message: 'Pet adopted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


exports.vaccinatePets = async (req, res) => {
    try {
      await petsService.vaccinatePets(req.params.petId,req.body);
      res.json({ message: 'Pet vaccinated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
exports.changePetImage = async (req, res) => {
    try {
      await petsService.changePetImage(req.params.petId, req.body);
      res.json({ message: 'Pet image updated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  