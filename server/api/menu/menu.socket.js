/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var menu = require('./menu.model');

exports.register = function(socket) {
  menu.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  menu.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('menu:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('menu:remove', doc);
}