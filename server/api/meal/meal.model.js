'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OptionSchema = new Schema({
  desc: String,
  choices: [String],
});

var AddonSchema = new Schema({
  desc: String,
  state: Boolean
});

var MealSchema = new Schema({
  desc: String,
  category: String,
  mealoptions: [OptionSchema],
  mealaddons: [AddonSchema],
  status: {type:String, enum:['active','inactive']}
});

module.exports = mongoose.model('Meal', MealSchema);