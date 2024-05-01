const Comment = require('../Models/Comment');
const User = require('../Models/User');

exports.createComment = async (email, appId, content, rating) => {
    try {
       
        const user = await User.findOne({ email: req.user_email });
        if (!user) {
            throw new Error('User not found');
        }

        
        const newComment = new Comment({
            user: req.user_email, 
            application: appId,
            content: content, 
            rating: rating
        });
        
      
        await newComment.save();
        return newComment;
    } catch (error) {
        throw new Error(error.message);
    }
};



exports.updateComment = async (commentId, content, rating) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            { content: content, rating: rating },
            { new: true }
        );
        return updatedComment;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function to delete a comment
exports.deleteComment = async (commentId) => {
    try {
        await Comment.findByIdAndDelete(commentId);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function to get all comments for a specific application
exports.getCommentsForApplication = async (appId) => {
    try {
        const comments = await Comment.find({ application: appId }).populate('user');
        return comments;
    } catch (error) {
        throw new Error(error.message);
    }
};
