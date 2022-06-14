//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Port
const port = process.env.PORT || 3000;

//Models
const Content = require('./model/content');

//Mongo Connection
const db = require('./connect/mongo');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
app.use(express.urlencoded({extended: true}));

//homepage
app.get('/', (req, res) => {
    res.send('Vuenet, welcome!');
})

app.get('/create', async(req,res) => {
    const contents = await Content.create({description: 'vuenet'});
    contents.save()
    res.send(contents);
})

//all contents
app.get('/content', async(req,res) => {
    const contents = await Content.find({});
    res.send(contents);
})

//show one
app.get('/content/:id', async (req,res) => {
    const single = await Content.findById(req.params.id);
    res.send(single)
})

app.listen(port, () => { console.log('connected!')});