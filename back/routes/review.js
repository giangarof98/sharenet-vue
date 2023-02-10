const express = require('express');
const router = express.Router();

//Controllers
const reviewController = require('../controllers/review')

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwner, isOwnerReview} = require('../middleware/isOwner')

router.get('/:id/reviews', CatchAsync(reviewController.getReviewByPost))
router.post('/:id/reviews', isLoggedIn, CatchAsync(reviewController.createReview))

// the first id stands for the content id; the second one stands for the review id
router.delete('/:id/reviews/:reviewId', isLoggedIn, isOwnerReview, CatchAsync(reviewController.deleteReview))

module.exports = router;