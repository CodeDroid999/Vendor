'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  desc: String,
  type: [{ type:Schema.ObjectId , ref:'Meal'}],
  addons: [String],
  sides: [String],
  status: {type:String, enum:['placed','queued','active','prepared','served']}
});

module.exports = mongoose.model('Order', OrderSchema);