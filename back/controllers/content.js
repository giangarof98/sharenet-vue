const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');
const User = require('../model/user');

exports.getProfile =  async(req,res) => {
    try{
        const username = req.params.username;
        const user = await User.findOne({username});
        const posts =  await Content.find({author: user});
            res.status(200).json({
            posts,
            user
        })

    } catch(err){
        console.log(err)
    }
}

exports.getAll = async(req,res) => {
    try{
        const contents = await Content.find({});
        res.status(200).json(contents);
    } catch(err){
        console.error(err)
    }
};

exports.create = async (req,res) => {
    const post = new Content(req.body);
    post.image = req.files.map(f => ({url: f.path, filename: f.filename}));
    post.author = req.user._id;
    await post.save();
    console.log(post);
    res.send(req.body);
};

exports.showOne = async (req,res) => {
    try{
        const {id} = req.params;
        const post = await Content.findById(id).populate({
            path: 'comments',
            populate:{
                path:'author'
            }
        }).populate('author');
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404)
            throw new Error('Post not found...')
        }

    } catch(err){
        console.log(err)
    }
};

exports.update = async(req,res) => {
    try{
        const {id} = req.params;
        const post = await Content.findByIdAndUpdate(id, {...req.body});
        console.log(post)
        res.status(200).json(post)

    } catch(err){
        console.log(err)
    }
        
}

exports.setBioUser = async(req,res) => {
    try{
        const {username} = req.params;
        if (!username) {
            throw new Error('Username is required');
        }
        const user = await User.findOneAndUpdate({username}, {...req.body}, {new:true});
        
        if (user.profilePic) {
            await cloudinary.v2.uploader.destroy(user.profilePic.public_id);
          }
      
          // Upload the new profile picture to Cloudinary
          if (req.file) {
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            user.profilePic = result;
          }
        res.status(200).json(user);

    } catch(err){
        if (err.code === 11000) {
            throw new Error(`Username '${username}' already exists.`);
          }
          throw err;
    }
}

exports.delete = async (req,res) => {
    try{
        const {id} = req.params;
        const content = await Content.findByIdAndDelete(id);
        res.status(200).json({message: 'deleted'})

    } catch(err){
        console.log(err)
    }
}