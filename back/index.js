//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const local = require('passport-local');

//Port
const port = process.env.PORT || 3000;

//Models
const User = require('./model/user')

//Routes
const routesContent = require('./routes/content');
const routesUser = require('./routes/user');
const routesReview = require('./routes/review');

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
app.use('/content/:id/review', routesReview);
app.use('/user', routesUser);

// app.all('*', (req,res,next) => {
//     next(new ExpressError('Page Not Found', 404))
// });

// app.use((err, req, res, next) => {
//     const {statusCode = 500} = err
//     if(!err.msg) { err.msg = 'Something went wrong'}
    
//     res.status(statusCode).render('error', { err })
// });


app.listen(port, () => { console.log(`connected to port: ${port}`) });

