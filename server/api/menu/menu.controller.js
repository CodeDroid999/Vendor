/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /menus              ->  index
 * POST    /menus              ->  create
 * GET     /menus/:id          ->  show
 * PUT     /menus/:id          ->  update
 * DELETE  /menus/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Menu = require('./menu.model');

// Get list of menus
exports.index = function(req, res) {
  Menu.find(function (err, menus) {
    if(err) { return handleError(res, err); }
    return res.json(200, menus);
  });
};

// Get a single menu
exports.show = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    return res.json(menu);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Menu.create(req.body, function(err, menu) {
    if(err) { return handleError(res, err); }
    return res.json(201, menu);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Menu.findById(req.params.id, function (err, menu) {
    if (err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    var updated = _.merge(menu, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, menu);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    menu.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}