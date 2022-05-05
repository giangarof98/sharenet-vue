
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

app.engine('ejs', ejsMate)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}));



//homepage
app.get('/', (req, res) => {
    res.send('hi')
})

//show all
app.get('/contents', async(req,res) => {
    const content = await Content.find({});
    res.render('contents', {content});
});

//render create form
app.get('/content/new', async (req,res) => {
    res.render('new')
})

//create new content
app.post('/content', async (req,res) => {
    const content = new Content(req.body.content);
    await content.save();
    res.redirect(`/content/${content._id}`);

    
})


//get one 
app.get('/content/:id', async (req, res) => {
    const content = await Content.findById(req.params.id);
    res.send(content)
})

app.listen(3000, () => { console.log('connected!')})