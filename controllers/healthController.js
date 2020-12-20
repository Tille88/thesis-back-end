// const Review = require('./../models/reviewModel');
// const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');


exports.checkHealth = catchAsync(
  async (req, res, next) => {
    // const doc = await Model.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data: "TEST"
      }
    });
});
