const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');

exports.getPostByUser = async(req,res) => {
    try{
        const user = req.user._id
        console.log(user)
        const fetchPostByCurrentUser = await Content.find({author: user})
        res.status(200).json({
            posts:fetchPostByCurrentUser,
            user: req.user
        })
        
    }catch(err){
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
        res.status(200).json(post)

    } catch(err){
        console.log(err)
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