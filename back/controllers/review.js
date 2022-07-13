const express = require('express');

//Models
const Content = require('../model/content');
const Review = require('../model/review')

exports.createReview = async (req,res) => {
    
    const review = req.body;
    await Review.create(review);
    console.log(review)
    res.status(201).json({message: 'created'});
}