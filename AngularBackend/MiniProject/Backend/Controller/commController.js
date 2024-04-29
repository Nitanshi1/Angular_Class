const commentService = require('../Services/commServices');

// Controller function to create a new comment
exports.createComment = async (req, res) => {
    try {
        const { userId, appId, content, rating } = req.body;
        const newComment = await commentService.createComment(userId, appId, content, rating);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to update an existing comment
exports.updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content, rating } = req.body;
        const updatedComment = await commentService.updateComment(commentId, content, rating);
        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to delete a comment
exports.deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        await commentService.deleteComment(commentId);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to get all comments for a specific application
exports.getCommentsForApplication = async (req, res) => {
    try {
        const { appId } = req.params;
        const comments = await commentService.getCommentsForApplication(appId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
