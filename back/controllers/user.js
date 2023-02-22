const express = require('express');
//const router = express.Router();

//Model
const User = require('../model/user.js');
const Content = require('../model/content.js');
const Single = require('../model/single')

//check usser session
exports.userLoggin = async(req,res) => {
    //console.log(req.session, req.user)
    res.send({session: req.session, user: req.user})
}

//get userprofile
exports.getProfile =  async(req,res) => {
    try{
        const username = req.params.username;
        const user = await User.findOne({username});
        const posts =  await Content.find({author: user}).populate({
            path:'author'
        });
        const description = await Single.find({author:user})
            res.status(200).json({
            posts,
            user,
            description,
        })

    } catch(err){
        console.log(err)
    }
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

//user profile
exports.setBioUser = async(req,res) => {
        try{
            const {username} = req.params;
            if (!username) {
                throw new Error('Username is required');
            }
            const user = await User.findOneAndUpdate({username}, {...req.body}, {new:true});
            
            res.status(200).json(user);
    
        } catch(err){
            if (err.code === 11000) {
                throw new Error(`Username '${username}' already exists.`);
              }
              throw err;
        }
}