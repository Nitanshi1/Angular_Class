const express = require('express');
const router  = express.Router();
 
const {favCount} = require('../middleware/authMiddleware'); 
const favoritesController = require('../controller/favoriteAppController')
router.get('/', favoritesController.getAllFavorites);
router.post('/:id', favCount, favoritesController.addToFavorites);
router.delete('/:id', favoritesController.removeFromFavorites);

module.exports = router;