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
        const successMessage = req.flash('success') ;
        res.status(200).json({contents, successMessage});
    } catch(err){
        console.error(err)
    }
};

exports.create = async (req,res) => {
    const post = new Content(req.body);
    post.image = req.files.map(f => ({url: f.path, filename: f.filename}));
    post.author = req.user._id;
    await post.save();
    req.flash('success', 'successfully created!')
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
            const successMessage = req.flash('updated');
            res.status(200).json({post,successMessage})
        } else {
            res.status(404)
            throw new Error('Post not found...')
        }
        // const successMessage = req.flash('success');
        console.log(res.data)
    } catch(err){
        console.log(err)
    }
};

exports.update = async(req,res) => {
    try{
        const {id} = req.params;
        const post = await Content.findByIdAndUpdate(id, {...req.body});
        console.log(post)
        req.flash('updated', 'successfully updated!')
        res.status(200).json(post)
        console.log(req.flash)
    } catch(err){
        console.log(err)
    }
        
}

exports.delete = async (req,res) => {
    try{
        const {id} = req.params;
        const content = await Content.findByIdAndDelete(id);
        req.flash('success', 'successfully deleted!')
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