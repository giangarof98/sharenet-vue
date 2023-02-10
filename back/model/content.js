const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    description: String,
    image: [{url:String,filename:String}],
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