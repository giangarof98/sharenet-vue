
//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');

//Models
const Content = require('./model/content');

//Mongo Connection
const db = require('./connect/mongo')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//homepage
app.get('/', (req, res) => {
    res.send('hi')
})

//show all
app.get('/contents', async(req,res) => {
    const content = await Content.find({});
    res.send(content);
});

//get one 
app.get('/content/:id', async (req, res) => {
    const content = await Content.findById(req.params.id);
    res.send(content)
})

app.listen(3000, () => { console.log('connected!')})