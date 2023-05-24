/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /meals              ->  index
 * POST    /meals              ->  create
 * GET     /meals/:id          ->  show
 * PUT     /meals/:id          ->  update
 * DELETE  /meals/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Meal = require('./meal.model');

// Get list of things
exports.index = function(req, res) {
  Meal.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
    if(err) { return handleError(res, err); }
    if(!meal) { return res.send(404); }
    return res.json(meal);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Meal.create(req.body, function(err, meal) {
    if(err) { return handleError(res, err); }
    return res.json(201, meal);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Meal.findById(req.params.id, function (err, meal) {
    if (err) { return handleError(res, err); }
    if(!meal) { return res.send(404); }
    var updated = _.merge(meal, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, meal);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
    if(err) { return handleError(res, err); }
    if(!meal) { return res.send(404); }
    meal.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}