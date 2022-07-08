const express = require('express');
const router = express.Router();
const passport = require('passport');

//Controllers
const userController = require('../controllers/user');

//registration SignUp

//router.get('/signup', userController.signupForm);
router.post('/signup', userController.signup);

router.get('/', userController.getAll);

router.delete('/users/:id', userController.delete);

//login SignIn

//router.get('/signin', userController.signinForm);
router.post('/signin', passport.authenticate('local', {failureRedirect: '/user/'}), userController.signin);




module.exports = router;