const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../model/user.js');

//Controllers
const userController = require('../controllers/user');

//registration SignUp

//router.get('/signup', userController.signupForm);
router.post('/signup', userController.signup);

router.get('/', userController.getAll);

router.delete('/users/:id', userController.delete);


//login SignIn

//router.get('/signin', userController.signinForm);
router.post('/signin', passport.authenticate("local", {failureRedirect: '/user/signin/'}), userController.signin);


module.exports = router;