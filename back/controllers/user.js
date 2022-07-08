const express = require('express');
//const router = express.Router();

//Model
const User = require('../model/user.js');

//Register form
// exports.signupForm = async(req, res) => {
//     res.send(
//         `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>
//             <h2>Registration</h2>
//             <form action="/user/signup" method="POST">

//                 <label for="firstName">Name<label>
//                 <input id="firstName" name="firstName"/>

//                 <label for="username">Username<label>
//                 <input id="username" name="username"/>

//                 <label for="email">email<label>
//                 <input id="email" type="email" name="email"/>

//                 <label for="password">password<label>
//                 <input id="password" type="password" name="password"/>

//                 <button>Signin</button>
//             </form>
//         <html/>
//         `
//     )
// }

exports.signup = async(req,res) => {
    const {email, username, firstName, password} = req.body;
    const user = new User({email, username, firstName, password});
    const registered = await User.register(user, password);
    console.log(registered);
    res.send(registered)
}

//All users
exports.getAll = async(req, res) => {
    const users = await User.find({});
    res.send(users)
}

//delete user

exports.delete = async(req,res) => {
    const {id} = req.params;
    const users = await User.findByIdAndDelete(id);
    res.send('deleted');
    console.log(users)
}

//login

//form

exports.signinForm = (req, res) => {
    res.send(` 
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>LogIn</h2>
            <form action="/user/signin" method="POST">

                <label for="username">Username<label>
                <input id="username" name="username"/>

                <label for="password">password<label>
                <input id="password" type="password" name="password"/>

                <button>LogIn</button>
            </form>
        <html/>

    `)
}

exports.signin = (req,res) => {
    res.redirect('/content');
}