const express = require('express');
const router = express.Router();

//Controllers
const reviewController = require('../controllers/review')

//Middleware
const CatchAsync = require('../middleware/catchAsync')

router.get('/:id/reviews', CatchAsync(reviewController.getReviewByPost))
router.post('/:id/reviews', CatchAsync(reviewController.createReview))

module.exports = router;