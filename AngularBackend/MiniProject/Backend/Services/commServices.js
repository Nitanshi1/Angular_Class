const Comment = require('../Models/Comment');

// Function to create a new comment
exports.createComment = async (userId, appId, content, rating) => {
    try {
        const newComment = new Comment({
            user: userId,
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

// Function to update an existing comment
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
