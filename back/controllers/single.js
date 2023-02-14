const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');
const User = require('../model/user');
const Single = require('../model/single');

exports.create = async (req,res) => {
    const post = new Single(req.body);
    post.author = req.user._id;
    await post.save();
    // console.log(post);
    res.send(req.body);
};