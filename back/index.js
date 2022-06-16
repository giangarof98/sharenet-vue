//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override')

//Port
const port = process.env.PORT || 3000;

//Models
const Content = require('./model/content');

//Routes
const routesContent = require('./routes/content')

//Mongo Connection
const db = require('./connect/mongo');

const app = express()

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.set('view engine', 'html')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', routesContent);

//homepage
// app.get('/', (req, res) => {
//     res.send('Vuenet, welcome!');
// })

//get all contents
// app.get('/content', async(req,res) => {
//     const contents = await Content.find({});
//     res.send(contents);
// })

//create
// app.get('/content/new', (req,res) => {
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
//             <form action="/create" method="POST">

//                 <label for="description">Description<label>
//                 <input placeholder="type here" id="description" name="content[description]"/>

//                 <label for="image">image<label>
//                 <input placeholger="type here" id="image" name="content[image]"/>

//                 <button>Create</button>
//             </form>
//         <html/>
//     `)
// })

// app.post('/create', async (req,res) => {
//     const content = new Content(req.body.content);
//     await content.save()
//     res.send('created')
//     console.log(req.body.content)

// })

//show one
// app.get('/content/:id', async (req,res) => {
//     const single = await Content.findById(req.params.id);
//     res.send(single)
// })

//update one
// app.get('/content/:id/edit', async (req,res) => {
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
// })

// app.put('/content/:id', async(req,res) => {
//     const {id} = req.params;
//     const content = await Content.findByIdAndUpdate(id, { ...req.body.content});
//     res.send(content)
//     console.log(content);
// })

//delete
// app.delete('/content/:id', async (req,res) => {
//     const {id} = req.params;
//     const content = await Content.findByIdAndDelete(id);
//     res.send('deleted');
//     console.log(content);
// })

app.listen(port, () => { console.log('connected!')});