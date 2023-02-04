const express = require('express');

//Models
const Content = require('../model/content');
const { findById, findByIdAndDelete } = require('../model/review');
const Review = require('../model/review')

exports.createReview = async (req,res) => {
    try{
        const post = await Content.findById(req.params.id)
        const content = new Review({body: req.body.body});
        post.comments.push(content)
        await content.save()
        await post.save()
        res.status(200).send(content)

    } catch(err){
        console.log(err)
    }
}

exports.getReviewByPost= async(req,res) => {
    try{
        const {id} = req.params;
        const post = await Content.findById(id).populate('comments')
        res.status(200).send(post.comments)
        // res.json(post.comments)

    } catch(err){
        console.log(err)
    }


}

exports.deleteReview = async(req,res) => {
    const {id, reviewId} = req.params;
    const post = Content.findByIdAndUpdate(id, {$pull:{comments: reviewId}})
    const review = await Review.findByIdAndDelete(reviewId);
    res.status(200).send(review)
    // res.send('deleted')

}