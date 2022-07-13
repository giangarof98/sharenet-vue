const express = require('express');
const router = express.Router();

//Controllers
const reviewController = require('../controllers/review')

//Middleware
const CatchAsync = require('../middleware/catchAsync')

router.post('/', CatchAsync(reviewController.createReview))

module.exports = router;