const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const review = require('./review')

const imgSchema = new Schema({
    url: String, 
    filename: String
});

const contentSchema = new Schema({
    //author: String,
    description: String,
    image: String,
    //like: Number,
    // reviews: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Review',
    // }]
});

module.exports = mongoose.model('Content',  contentSchema);