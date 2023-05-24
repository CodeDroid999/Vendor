'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BillSchema = new Schema({
  desc: String,
  orders: [{ type:Schema.ObjectId , ref:'Order'}],
  ispaid: Boolean,
  paymenttype: [{type:String, enum:['unpaid','cash','credit','debit','giftcard']}]
});

module.exports = mongoose.model('Bill', BillSchema);