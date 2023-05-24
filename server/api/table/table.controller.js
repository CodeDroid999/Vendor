/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /tables              ->  index
 * POST    /tables              ->  create
 * GET     /tables/:id          ->  show
 * PUT     /tables/:id          ->  update
 * DELETE  /tables/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Table = require('./table.model');

// Get list of tables
exports.index = function(req, res) {
  Table.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single table
exports.show = function(req, res) {
  Table.findById(req.params.id, function (err, table) {
    if(err) { return handleError(res, err); }
    //if(!table) { return res.send(404); }
    return res.json(table);
  });
};

// Creates a new table in the DB.
exports.create = function(req, res) {
  Table.create(req.body, function(err, table) {
    if(err) { return handleError(res, err); }
    return res.json(201, table);
  });
};

// Updates an existing table in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Table.findById(req.params.id, function (err, table) {
    if (err) { return handleError(res, err); }
//    if(!table) { return res.send(404); }
    var updated = _.merge(table, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, table);
    });
  });
};

// Deletes a table from the DB.
exports.destroy = function(req, res) {
  Table.findById(req.params.id, function (err, table) {
    if(err) { return handleError(res, err); }
    if(!table) { return res.send(404); }
    table.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}