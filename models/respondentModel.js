const mongoose = require('mongoose');

const respondentSchema = new mongoose.Schema(
  {
    // mongoose.Schema.ObjectId?
    uuid: {
      type: String,
      required: [true, 'UUID can not be empty!']
    },
    sessionStart: {
      type: Date,
      default: Date.now()
    }
  }
);

// respondentSchema.index({ tour: 1, user: 1 }, { unique: true });

// respondentSchema.pre(/^find/, function(next) {

//   this.populate({
//     path: 'user',
//     select: 'name photo'
//   });
//   next();
// });


// reviewSchema.post('save', function() {
//   // this points to current review
//   this.constructor.calcAverageRatings(this.tour);
// });

// findByIdAndUpdate
// findByIdAndDelete
// reviewSchema.pre(/^findOneAnd/, async function(next) {
//   this.r = await this.findOne();
//   // console.log(this.r);
//   next();
// });

// reviewSchema.post(/^findOneAnd/, async function() {
//   // await this.findOne(); does NOT work here, query has already executed
//   await this.r.constructor.calcAverageRatings(this.r.tour);
// });

const Respondent = mongoose.model('Respondent', respondentSchema);

module.exports = Respondent;
