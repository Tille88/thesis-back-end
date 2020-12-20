const Respondent = require('./../models/respondentModel');
const catchAsync = require('../utils/catchAsync');
const uuid = require('uuid');



exports.createRespondent = catchAsync(
  async (req, res, next) => {
  console.log(req.body);
  // const doc = await Respondent.create(req.body);
  const doc = await Respondent.create({
    "uuid": uuid.v4()
  });

  res.status(201).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});;

