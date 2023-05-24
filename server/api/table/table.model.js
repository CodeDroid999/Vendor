'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TableSchema = new Schema({
  num: [Schema.Integer],
  x: [Schema.Integer],
  y: [Schema.Integer],
  unit_height: [Schema.Integer],
  unit_width: [Schema.Integer],
  seats: [Schema.Integer],
  bills: [{ type:Schema.ObjectId , ref:'Bill'}],
  status: {type:String, enum:['available','occupied','uncleaned','reserved','disabled']}
});

module.exports = mongoose.model('Table', TableSchema);