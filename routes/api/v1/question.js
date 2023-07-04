const express = require('express');
const router = express.Router();

const questionController = require('../../../controllers/questionsController')


router.post('/create', questionController.create)
router.get('/:questionId', questionController.question)
router.get('/:questionId/delete' , questionController.delete)




module.exports = router;