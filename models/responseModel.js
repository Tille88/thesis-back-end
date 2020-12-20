const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: [true, 'UUID can not be empty!']
    },
    mapVersion: {
      type: String,
      required: [true, 'Map path can not be empty!']
    },
    sliderChanges: [
      {
        timestamp: Number,
        val: Number
      }
    ],
    imageHoverEvents: [
      {
        timestamp: Number,
        x: Number,
        y: Number
      }
    ],
    submitTime: {
      type: Number,
      required: [true, 'Need to include time to submit']
    }
  }
);

const Response = mongoose.model('Response',responseSchema);

module.exports = Response;
