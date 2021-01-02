const express = require('express');
const acceptanceController = require('../controllers/acceptanceController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(acceptanceController.createAcceptanceResponse);

module.exports = router;
