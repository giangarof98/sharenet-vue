const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    //author:
    title: String,
    image: String,
    //like: 
    //dislike: 
    //comment: 
})

module.exports = mongoose.model('Content',  contentSchema);