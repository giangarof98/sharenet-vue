//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const {multerPost} = require('../middleware/multerConfig');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwner, isOwnerAccount} = require('../middleware/isOwner')

// router.get('/profile/:username', contentController.getProfile);

router.get('/', CatchAsync(contentController.getAll));
router.post('/', isLoggedIn, multerPost, CatchAsync(contentController.create));
router.get('/:id', CatchAsync(contentController.showOne));

router.put('/edit/:id', isLoggedIn, isOwner, multerPost, CatchAsync(contentController.update));
// router.put('/profile/:username', isLoggedIn, isOwnerAccount, CatchAsync(contentController.setBioUser))

router.delete('/:id', isLoggedIn, isOwner, CatchAsync(contentController.delete));

router.post('/:id/like', isLoggedIn, CatchAsync(contentController.likeContent))

module.exports = router;