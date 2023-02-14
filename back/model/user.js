const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type:String,
        unique:true
    },
    bio: {
        type: String,
        default: ''
    },
    //profilePic: [{url:String,filename:String}],
    email: {
        type: String,
        required: true,
        min: 6,
        unique: true,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);