const Response = require('../models/responseModel');
const catchAsync = require('../utils/catchAsync');



exports.createResponse = catchAsync(
  async (req, res, next) => {

  const doc = await Response.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});;

