//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const multer = require('../middleware/multerConfig');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwner, isOwnerAccount} = require('../middleware/isOwner')

router.get('/profile/:username', contentController.getProfile);

router.get('/', CatchAsync(contentController.getAll));
router.post('/', isLoggedIn, multer, CatchAsync(contentController.create));
router.get('/:id', CatchAsync(contentController.showOne));

router.put('/edit/:id', isLoggedIn, isOwner, multer, CatchAsync(contentController.update));
router.put('/profile/:username', isLoggedIn, isOwnerAccount, multer, CatchAsync(contentController.setBioUser))

router.delete('/:id', isLoggedIn, isOwner, CatchAsync(contentController.delete));

module.exports = router;