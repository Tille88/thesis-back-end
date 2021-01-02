const Acceptance = require('../models/acceptanceModel');
const catchAsync = require('../utils/catchAsync');



exports.createAcceptanceResponse = catchAsync(
  async (req, res, next) => {

  const doc = await Acceptance.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});

