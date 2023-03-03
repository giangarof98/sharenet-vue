const express = require('express');

//Models
const Content = require('../model/content');
const Review = require('../model/review')

exports.createReview = async (req,res) => {
    try{
        const post = await Content.findById(req.params.id)
        const content = new Review({body: req.body.body});
        post.comments.push(content);
        content.author = req.user._id;
        // req.flash('success', 'comment successfully created!')
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
        const post = await Content.findById(id).populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        }).populate('author');
        const successMessage = req.flash('success');
        // res.status(200).json({post: post.comments, successMessage})
        res.status(200).json(post.comments)
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

exports.likeReview = async (req,res) => {
    try{
        const review = await Review.findById(req.params.reviewId);
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