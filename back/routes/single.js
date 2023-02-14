//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const singleController = require('../controllers/single');

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwner} = require('../middleware/isOwner')

router.post('/', isLoggedIn, CatchAsync(singleController.create));

module.exports = router;