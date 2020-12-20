const express = require('express');
const respondentController = require('../controllers/respondentController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(respondentController.createRespondent);

module.exports = router;
