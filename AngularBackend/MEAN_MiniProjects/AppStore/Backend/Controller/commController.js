const commentService = require('../Services/commServices');


exports.createComment = async (req, res) => {
    try {
        const {email, appId, content, rating } = req.body;
        const newComment = await commentService.createComment(email, appId, content, rating);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


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


exports.deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        await commentService.deleteComment(commentId);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getCommentsForApplication = async (req, res) => {
    try {
        const { appId } = req.params;
        const comments = await commentService.getCommentsForApplication(appId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
