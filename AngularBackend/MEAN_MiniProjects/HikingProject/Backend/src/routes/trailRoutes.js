const express = require('express');
const router = express.Router();
const trailControllers = require('../controller/trailControllers');
const commentController = require('../controller/commentController');
const reviewControllers = require('../controller/reviewControllers');

router.get('/toprated', trailControllers.getTopRatedTrails);
router.get('/search',trailControllers.searchByLocation)
router.get('/filter',trailControllers.filter)

router.get('/', trailControllers.getAllTrails);
router.get('/:id', trailControllers.getTrailById);

router.post('/', trailControllers.createTrail);
router.put('/:id', trailControllers.updateTrail);
router.delete('/:id', trailControllers.deleteTrail);

router.get('/comment/:id',commentController.getAllComments);
router.post('/comment/:id',commentController.createComment);
router.get('/:id/reviews',reviewControllers.getAllReview);
router.post('/:id/reviews',reviewControllers.createReview);
router.put('/:trailId/reviews/:id',reviewControllers.updateReview);
router.delete('/:trailId/reviews/:id',reviewControllers.deleteReview);

module.exports = router;
