const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../model/user.js');

//Controllers
const userController = require('../controllers/user');

//Middleware
const CatchAsync = require('../middleware/catchAsync');
const {isLoggedIn} = require('../middleware/isLoggedin')
const {isOwner, isOwnerAccount} = require('../middleware/isOwner')

//user profile
router.get('/profile/:username', userController.getProfile);

//registration SignUp
router.post('/signup', CatchAsync(userController.signup));
router.get('/', userController.getAll);
router.delete('/users/:id', userController.delete);

//login SignIn
router.post('/signin', passport.authenticate("local", {failureFlash:true, failureRedirect: '/user/signin/'}), userController.signin);
router.get('/signin', CatchAsync(userController.userLoggin))

//logout
router.get('/logout', userController.logout)

//profile
router.put('/profile/:username', isLoggedIn, isOwnerAccount, CatchAsync(userController.setBioUser))

module.exports = router;