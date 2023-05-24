/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var order = require('./order.model');

exports.register = function(socket) {
  order.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  order.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('order:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('order:remove', doc);
}