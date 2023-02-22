const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');
const User = require('../model/user');


exports.getAll = async(req,res) => {
    try{
        const contents = await Content.find({}).populate({
            path:'author'
        });
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

exports.delete = async (req,res) => {
    try{
        const {id} = req.params;
        const content = await Content.findByIdAndDelete(id);
        res.status(200).json({message: 'deleted'})

    } catch(err){
        console.log(err)
    }
}

exports.likeContent = async(req,res) => {
    try{
        const content = await Content.findById(req.params.id);
        const liked = content.likes.some((like) => {
            return like.equals(req.user._id)
        })
        
        if (liked) {
            content.likes.pull(req.user._id);
        } else {
            content.likes.push(req.user._id);
        }

        await content.save();
        return res.status(200).json({ message: liked ? 'Like removed' : 'Like added' });


    } catch(err){
        console.log(err)
    }
}