const express=require('express');
const router=express.Router();
const playlistController=require('../controller/playlistController');
const {authenticateUser, authorizeUser, authorizeCreator}=require('../middleware/authMiddleware')
router.get('/:id',authorizeUser('user'), playlistController.getPlaylistById)
router.post('/',authorizeUser('user'),playlistController.createplaylist)
router.put('/:id',authorizeUser('user'),authorizeCreator,playlistController.updatePlaylist)
router.delete('/:id',authorizeUser('user'),authorizeCreator,playlistController.deleteplaylist)
router.put('/:pid/addsong/:sid',authorizeUser('user'),playlistController.addToPlayList)
router.delete('/:pid/removesong/:sid',authorizeUser('user'),authorizeCreator,playlistController.removeFromPlaylist)
module.exports=router