/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var bill = require('./bill.model');

exports.register = function(socket) {
  bill.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  bill.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bill:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bill:remove', doc);
}