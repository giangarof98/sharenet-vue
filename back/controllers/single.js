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
    console.log(post);
    res.status(200).send(post)
};

exports.getAllPostsByUser = async (req,res) => {
    
}