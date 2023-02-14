const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const singleSchema = new Schema({
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    description: String,
    comments: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
});

// contentSchema.post('findOneAndDelete', async(doc) => {
//     if(doc){
//         await Review.deleteMany({
//             _id:{
//                 $in: doc.comments
//             }
//         })
//     }
// })

module.exports = mongoose.model('Single',  singleSchema);