const answerService = require('../services/AnswerService');
const questionService = require('../services/QuestionService');

exports.getAllAnswers = async (req, res) => {
    try {
        const answers = await answerService.getAllAnswers(req.params.id);
        res.json(answers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAnswerById = async (req, res) => {
    try {
        const answer = await answerService.getAnswerById(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: "Answer not found" });
        }
        res.json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAnswer = async (req, res) => {
    try {
        const answer = await answerService.createAnswer(req.params.id, req.body, req.user._id);
        res.status(201).json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAnswer = async (req, res) => {
    try {
        const answer = await answerService.updateAnswer(req.params.id, req.body);
        if (!answer) {
            return res.status(404).json({ message: "Answer not found" });
        }
        res.json(answer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAnswer = async (req, res) => {
    try {
        await answerService.deleteAnswer(req.params.id);
        res.json({ message: "Answer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.likeAnswer = async (req, res) => {
    try {
        await answerService.likeAnswer(req.params.id);
        res.json({ message: "Thank you for your like" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
