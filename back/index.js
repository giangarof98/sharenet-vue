//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const local = require('passport-local');

//Port
const port = process.env.PORT || 3000;

//Models
const User = require('./model/user')

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
app.use('/', routesContent);

//User
// app.get('/test', async (req,res) => {
//     const user = new User({email:'test@test.com', username:'testtt'})
//     const newU = await User.register(user, 'test');
//     res.send(newU)
// });

//Register form
app.get('/register', (req,res) => {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>Registration</h2>
            <form action="/register" method="POST">

                <label for="firstName">Name<label>
                <input id="firstName" name="firstName"/>

                <label for="username">Username<label>
                <input id="username" name="username"/>

                <label for="email">email<label>
                <input id="email" type="email" name="email"/>

                <label for="password">password<label>
                <input id="password" type="password" name="password"/>

                <button>Signin</button>
            </form>
        <html/>
        `
    )
})

//Create user
app.post('/register', async(req,res) => {
    const {email, username, fullName, password} = req.body;
    const user = new User({email, username, firstName, password});
    const registered = await User.register(user, password);
    console.log(registered);
    res.send(registered)

})

//All users
app.get('/users', async(req,res) => {
    const users = await User.find({});
    res.send(users)
})


app.listen(port, () => { console.log('connected!')});