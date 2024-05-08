const express=require('express');
const router=express.Router();
const songController=require('../controller/songController');
const {authorizeUser}=require('../middleware/authMiddleware')
router.get('/',songController.getAllSongs)
router.get('/:id',songController.getSongById)
router.post('/',authorizeUser('admin'),songController.createSong)
router.put('/:id',authorizeUser('admin'),songController.updateSong)
router.delete('/:id',authorizeUser('admin'),songController.deleteSong)
module.exports=router; 