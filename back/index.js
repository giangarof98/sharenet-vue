//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override')

//Port
const port = process.env.PORT || 3000;

//Models
//const Content = require('./model/content');

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

app.listen(port, () => { console.log('connected!')});