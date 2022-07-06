const express = require('express');
//const router = express.Router();

//Model
const Content = require('../model/content.js');

// homepage
// exports.homepage = (req, res) => {
//     res.send('Vuenet, welcome!');
// };

exports.getAll = async(req,res) => {
    const contents = await Content.find({});
    res.status(200).json(contents);
    //res.send(contents);
};

// exports.createForm = (req,res) => {
//     res.send(`
//     <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <form action="/content/create" method="POST">

//                 <label for="description">Description<label>
//                 <input placeholder="type here" id="description" name="content[description]"/>

//                 <label for="image">image<label>
//                 <input placeholger="type here" id="image" name="content[image]"/>

//                 <button>Create</button>
//             </form>
//         <html/>
//     `)
// };

exports.create = async (req,res) => {
    const post = req.body;
    await Content.create(post)
    
    // const content = new Content(req.body.content);
    // await content.save();
    // console.log(content)
    res.status(201).json({message: 'created'})
    
    //res.send(req.body.content)
    //console.log(req.body.content)
};

exports.showOne = async (req,res) => {
    const single = await Content.findById(req.params.id);
    res.status(200).json(single)
    //res.send(single)
};

// exports.updateForm = async (req,res) => {
//     const content = await Content.findById(req.params.id);
//     res.send(`
//     <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <form action="/content/${content._id}?_method=PUT" method="POST">

//                 <label for="description">Description<label>
//                 <input value="${content.description}" id="description" name="content[description]/>

//                 <label for="image">image<label>
//                 <input value="${content.image}" id="image" name="content[image]"/>

//                 <button>Update</button>
//             </form>
//         <html/>
//     `)
// }

exports.update = async(req,res) => {
    const id = req.params.id;
    const post = req.body;
    await Content.findByIdAndUpdate(id,post)
    //const content = await Content.findByIdAndUpdate(id, { ...req.body.content});
    res.status(200).json({message: 'updated'})
    //res.send(content)
    //console.log(content);
}

exports.delete = async (req,res) => {
    const {id} = req.params;
    const content = await Content.findByIdAndDelete(id);
    res.status(200).json({message: 'deleted'})
    //res.send('deleted');
    //console.log(content);
}