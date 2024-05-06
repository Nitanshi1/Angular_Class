const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const {authorizeUser} = require('../middleware/authMiddleware');

router.get('/', authorizeUser('admin'), userController.getAllUsers);
router.get('/:id', authorizeUser('admin'), userController.getUserById);
router.put('/:id', authorizeUser('admin'), userController.updateUser);

module.exports=router;