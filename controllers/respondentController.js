const Respondent = require('./../models/respondentModel');
const catchAsync = require('../utils/catchAsync');
const uuid = require('uuid');
const utils = require('../utils/utils');


// TODO-maybe: exchange for random lookups of progressions from DB?
const IMAGE_COUNT = 10;

let imgIdxs = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021"];
let cols = ["red", "blue", "green"];
let legendTypes = ["annotated", "checkered", "clustered", "sampled"];
let legendBaseline = "headline";

function generateRandomSelection(){
  let legendProg = [legendBaseline];
  while(legendProg.length < (IMAGE_COUNT-1)){
    utils.shuffleArray(legendTypes);
    legendProg = legendProg.concat(legendTypes);
  }
  legendProg.push(legendBaseline);

  let colProg = [];
  utils.shuffleArray(cols);
  while(colProg.length<IMAGE_COUNT){
    colProg = colProg.concat(cols);
  }

  utils.shuffleArray(imgIdxs);
  return imgIdxs.slice(0, IMAGE_COUNT).map((num, idx) => {
    return `${process.env.IMAGEPATH}${num}-${colProg[idx]}-${legendProg[idx]}-legend-merge.png`;
  });
}



exports.createRespondent = catchAsync(
  async (req, res, next) => {
  const doc = await Respondent.create({
    "uuid": uuid.v4(),
    "imageProg": generateRandomSelection()
  });

  res.status(201).json({
    status: 'success',
    data: doc
  });
});;

