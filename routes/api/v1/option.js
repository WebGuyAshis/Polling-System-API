const express = require('express');

const router = express.Router();
const optionsController = require('../../../controllers/optionsController')

router.get('/:optionId/add_vote',  optionsController.addVote)
router.get('/:optionId/delete', optionsController.delete)


module.exports = router;
