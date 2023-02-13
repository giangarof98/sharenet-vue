const express = require('express');
//const router = express.Router();

//Model
const User = require('../model/user.js');

exports.userLoggin = async(req,res) => {
    console.log(req.session)
    res.send(req.session)
}

//Register 
exports.signup = async(req, res, next) => {
    try{
        const {email, username, firstName, lastName, password, profilePic} = req.body;
        const user = new User({email, username, firstName, lastName, password, profilePic});
        const registered = await User.register(user, password);
        req.login(registered, err => {
            if(err) return next(err)
            console.log(registered);
            res.status(201).json({message:'registered'})
        })

    } catch(err){
        console.log(err)
    }
}

//All users
exports.getAll = async(req, res) => {
    const users = await User.find({});
    res.status(200).json(users)
}

//delete user
exports.delete = async(req,res) => {
    const {id} = req.params;
    const users = await User.findByIdAndDelete(id);
    res.status(200).json({message:'deleted'});
    console.log(users)
}

//login
exports.signin = (req,res) => {
    res.redirect('/content');
}

//logout
exports.logout = (req,res) => {
    try{
        req.session.destroy(function (err) {
            res.redirect('/');
        });

    } catch(err){
        console.log(err)
    }
}