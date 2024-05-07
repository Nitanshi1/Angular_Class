const express = require('express');
const router = express.Router();
const petsController = require('../Controller/PetsController');

router.get('/', petsController.getPets);
router.get('/available', petsController.getPetsAvailability);
router.get('/vaccinated', petsController.getPetsVaccinated);
router.get('/:petId', petsController.getPetById);
router.post('/', petsController.createPet);
router.put('/:petId', petsController.updatePet);
router.delete('/:petId', petsController.deletePet);

router.get('/species/:species', petsController.getPetsBySpecies);
router.get('/age/:minAge/:maxAge', petsController.getPetsAge);
// router.get('/available', petsController.getPetsAvailability);
// router.get('/age/vaccinated', petsController.getPetsVaccinated);
router.put('/:petId/adopt', petsController.adoptPets);
router.put('/:petId/vaccinate', petsController.vaccinatePets);
router.put('/:petId/changeimage', petsController.changePetImage);
module.exports = router;
