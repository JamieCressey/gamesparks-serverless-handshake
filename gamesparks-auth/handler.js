'use strict';
var crypto = require('crypto');
module.exports.handler = function (event, context, cb) {
  return cb(null, {
    hmac: crypto.createHmac('SHA256', process.env.GS_API_SECRET).update(
    event.nonce).digest('base64')
  });
};
