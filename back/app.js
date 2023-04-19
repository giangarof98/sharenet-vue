// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }

const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const local = require('passport-local');
const flash = require('connect-flash')

//Port
const port = process.env.PORT || 3000;

//Models
const User = require('./model/user')

//Routes
const routesContent = require('./routes/content');
const routesUser = require('./routes/user');
const routesReview = require('./routes/review');
const routesSingle = require('./routes/single');

//Mongo Connection
const db = require('./connect/mongo');

const app = express()

dotenv.config()

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('image'));
app.use(flash());

const sessionConfig = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}
app.use(session(sessionConfig));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new local(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Endpoint
app.use('/content', routesContent);
app.use('/content', routesReview);
app.use('/singlecontent', routesSingle);
app.use('/user', routesUser);

app.listen(port, () => { console.log(`connected to port: ${port}`) });

