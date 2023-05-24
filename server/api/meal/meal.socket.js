/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var meal = require('./meal.model');

exports.register = function(socket) {
  meal.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  meal.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('meal:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('meal:remove', doc);
}