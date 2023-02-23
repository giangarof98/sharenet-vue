//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const singleController = require('../controllers/single');

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwnerSinglePost} = require('../middleware/isOwner')

router.post('/', isLoggedIn, CatchAsync(singleController.create));
router.get('/publications', CatchAsync(singleController.getAll));

router.delete('/delete/:id', isLoggedIn, isOwnerSinglePost, CatchAsync(singleController.delete))

//Like post
router.post('/like/:publicationId', isLoggedIn, CatchAsync(singleController.likePost))

module.exports = router;