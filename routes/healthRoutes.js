const express = require('express');
const healthController = require('../controllers/healthController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(healthController.checkHealth);

module.exports = router;
