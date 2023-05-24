/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /bill              ->  index
 * POST    /bill              ->  create
 * GET     /bill/:id          ->  show
 * PUT     /bill/:id          ->  update
 * DELETE  /bill/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Bill = require('./bill.model');

// Get list of bills
exports.index = function(req, res) {
  Bill.find(function (err, bill) {
    if(err) { return handleError(res, err); }
    return res.json(200, bill);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Bill.findById(req.params.id, function (err, bill) {
    if(err) { return handleError(res, err); }
    if(!bill) { return res.send(404); }
    return res.json(bill);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Bill.create(req.body, function(err, bill) {
    if(err) { return handleError(res, err); }
    return res.json(201, bill);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bill.findById(req.params.id, function (err, bill) {
    if (err) { return handleError(res, err); }
    if(!bill) { return res.send(404); }
    var updated = _.merge(Bill, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Bill);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Bill.findById(req.params.id, function (err, bill) {
    if(err) { return handleError(res, err); }
    if(!bill) { return res.send(404); }
    bill.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}