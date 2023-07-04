const express = require('express');
const router = express.Router();

const questionController = require('../../../controllers/questionsController')


router.post('/create', questionController.create)
router.get('/:questionId', questionController.question)




module.exports = router;