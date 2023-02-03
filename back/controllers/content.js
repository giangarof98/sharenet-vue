const express = require('express');
const fs = require('fs');
//const router = express.Router();

//Model
const Content = require('../model/content');

exports.getAll = async(req,res) => {
    try{
        const contents = await Content.find({});
        res.status(200).json(contents);
    } catch(err){
        console.error(err)
    }
};

exports.create = async (req,res) => {
    const post = new Content(req.body);
    post.image = req.files.map(f => ({url: f.path, filename: f.filename}))
    await post.save()
    console.log(post)
    res.send(req.body)  
};

exports.showOne = async (req,res) => {
    try{
        const {id} = req.params;
        const post = await Content.findById(id);
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
        res.status(200).json(post)

    } catch(err){
        console.log(err)
    }
    // let new_image = '';
    // if(req.file){
    //     new_image = req.file.filename
    //     try{
    //         fs.unlinkSync('./image/'+req.body.image)
    //     } catch(err){
    //         console.log(err)
    //         } 
    //     }else {
    //         new_image = req.body.old_image;
    //     }
    //     const newpost = req.body;
    //     newpost.image = new_image
    //     try{
    //         await Content.findByIdAndUpdate(id,newpost)
    //         res.status(200).json({message: 'updated'})

    //     } catch(err){
    //         console.log(err)
    //     }
        
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