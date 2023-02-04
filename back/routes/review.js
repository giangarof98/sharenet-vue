const express = require('express');
const router = express.Router();

//Controllers
const reviewController = require('../controllers/review')

//Middleware
const CatchAsync = require('../middleware/catchAsync')

router.get('/:id/reviews', CatchAsync(reviewController.getReviewByPost))
router.post('/:id/reviews', CatchAsync(reviewController.createReview))

// the first id stands for the content id; the second one stands for the review id
router.delete('/:id/reviews/:reviewId', CatchAsync(reviewController.deleteReview))

module.exports = router;