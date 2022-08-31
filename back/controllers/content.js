const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');

exports.getAll = async(req,res) => {
    const contents = await Content.find({});
    res.status(200).json(contents);
    //res.send(contents);
};

exports.create = async (req,res) => {
    const post = req.body;
    const image = req.file.filename;
    post.image = image;
    await Content.create(post)
    res.send(req.body)    
};

exports.showOne = async (req,res) => {
    const post = await Content.findById(req.params.id)
    res.status(200).json(post)
};


exports.update = async(req,res) => {
    // const id = req.params.id;
    
    // const post = req.body;
    
    // await Content.findByIdAndUpdate(id,post)
    // res.status(200).json({message: 'updated'})

    const id = req.params.id;
    let new_image = '';
    if(req.file){
        new_image = req.file.filename
        try{
            fs.unlinkSync('./image/'+req.body.image)
        } catch(err){
            console.log(err)
            } 
        }else {
            new_image = req.body,old_image;
        }
        const newpost = req.body;
        newpost.image = new_image
        try{
            await Content.findByIdAndUpdate(id,newpost)
            res.status(200).json({message: 'updated'})

        } catch(err){
            console.log(err)
        }
        
}

exports.delete = async (req,res) => {
    const {id} = req.params;
    const content = await Content.findByIdAndDelete(id);
    res.status(200).json({message: 'deleted'})
}