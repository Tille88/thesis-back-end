const express = require('express');
const respondentController = require('../controllers/responseController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(respondentController.createResponse);

module.exports = router;
