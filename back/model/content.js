const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const reviews = require('./review')

// const imgSchema = new Schema({
//     url: String, 
//     filename: String
// });

const contentSchema = new Schema({
    //author: String,
    description: String,
    // image:[imgSchema]
    image: [{url:String,filename:String}],
    //like: Number,
    comments: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
});

contentSchema.post('findOneAndDelete', async(doc) => {
    if(doc){
        await Review.deleteMany({
            _id:{
                $in: doc.comments
            }
        })
    }
})

module.exports = mongoose.model('Content',  contentSchema);