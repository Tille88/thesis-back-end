const mongoose = require('mongoose');

const respondentSchema = new mongoose.Schema(
  {
    // mongoose.Schema.ObjectId?
    uuid: {
      type: String,
      required: [true, 'UUID can not be empty!']
    },
    imageProg: {
      type: [String],
      required: [true, 'ImageProg can not be empty!']
    },
    sessionStart: {
      type: Date,
      default: Date.now()
    }
  }
);


const Respondent = mongoose.model('Respondent', respondentSchema);

module.exports = Respondent;
