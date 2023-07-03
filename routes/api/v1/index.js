const express = require('express');

const router = express.Router();

const questionController = require('../../../controllers/questionsController')

router.get('/question/:id',  questionController.question)

module.exports = router;