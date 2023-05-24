/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var table = require('./table.model');

exports.register = function(socket) {
  table.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  table.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('table:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('table:remove', doc);
}