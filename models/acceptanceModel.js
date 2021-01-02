const mongoose = require('mongoose');

const acceptanceSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: [true, 'UUID can not be empty!']
    },
    headline: {
      type: String,
      required: [true, 'Headline acceptance score can not be empty!']
    },
    annotated: {
      type: String,
      required: [true, 'Annotated acceptance score can not be empty!']
    },
    checkered: {
      type: String,
      required: [true, 'Checkered acceptance score can not be empty!']
    },
    sampled: {
      type: String,
      required: [true, 'Sampled acceptance score can not be empty!']
    },
    clustered: {
      type: String,
      required: [true, 'Clustered acceptance score can not be empty!']
    }
  }
);

const Acceptance = mongoose.model('Acceptance',acceptanceSchema);

module.exports = Acceptance;
