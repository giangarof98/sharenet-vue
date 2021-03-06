const express = require('express');
//const router = express.Router();

//Model
const Content = require('../model/content.js');

exports.getAll = async(req,res) => {
    const contents = await Content.find({});
    res.status(200).json(contents);
    //res.send(contents);
};

exports.create = async (req,res) => {
    const post = req.body;
    await Content.create(post)
    res.status(201).json({message: 'created'})
    
};

exports.showOne = async (req,res) => {
    const single = await Content.findById(req.params.id)
    res.status(200).json(single)
};


exports.update = async(req,res) => {
    const id = req.params.id;
    const post = req.body;
    await Content.findByIdAndUpdate(id,post)
    res.status(200).json({message: 'updated'})
}

exports.delete = async (req,res) => {
    const {id} = req.params;
    const content = await Content.findByIdAndDelete(id);
    res.status(200).json({message: 'deleted'})
}