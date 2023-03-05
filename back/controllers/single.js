const express = require('express');
const fs = require('fs');
// dconst router = express.Router();

//Model
const User = require('../model/user');
const Single = require('../model/single');

exports.create = async (req,res) => {
    const post = new Single(req.body);
    post.author = req.user._id;
    await post.save();
    req.flash('success', 'successfully created!')
    // console.log(post);
    res.status(200).send(post)
};

exports.getAll = async (req,res) => {
    try{
        const contents = await Single.find({}).populate({
            path:'author',
            
        });
        const successMessage = req.flash('success') ;
        res.status(200).json({contents, successMessage});
    } catch(err){
        console.error(err)
    }
}

exports.delete = async (req, res) => {
    const {id} = req.params;
    const content = await Single.findByIdAndDelete(id);
    req.flash('success', 'successfully deleted!')
    res.status(200).json({message: 'deleted'})
}

exports.likePost = async (req,res) => {
    try{
        const review = await Single.findById(req.params.publicationId);
        console.log(review)
        const liked = review.likes.some((like) => {
            return like.equals(req.user._id)
        })
        
        if (liked) {
            review.likes.pull(req.user._id);
        } else {
            review.likes.push(req.user._id);
        }

        await review.save();
        return res.status(200).json({ message: liked ? 'Like removed' : 'Like added' });


    } catch(err){
        console.log(err)
    }
}

