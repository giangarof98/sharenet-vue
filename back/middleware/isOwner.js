const Content = require('../model/content');
const Review = require('../model/review');
const User = require('../model/user');

module.exports.isOwner = async(req,res,next) => {
    const {id} = req.params;
    const post = await Content.findById(id);
    if(!post.author.equals(req.user._id)){
        return res.status(401).json({error: `You're not authorized to update this post`})
    }
    next()
}

module.exports.isOwnerAccount = async(req,res,next) => {
    const {username} = req.params;
    const user = await User.findOne({username});
    if (user.username !== req.user.username) {
        return res.status(401).json({ error: `You're not authorized to update this account` });
      }
    next()
}

module.exports.isOwnerReview = async(req,res,next) => {
    const {reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        return res.status(401).json({error: `You're not authorized to update this post`})
    }
    next()
}