'use strict';

/**
* // Converts this:
* 'user.name=Rafael Rinaldi\nuser.email=rafael@rinaldi.io\n'
* // Into this:
* {'user.name': 'Rafael Rinaldi', email: 'rafael@rinaldi.io'}
*/
module.exports = function(raw) {
  var config = {};

  raw
    .trim()
    .split(/\n/)
    .forEach(function(value) {
      var parsed = value.split('=');
      config[parsed[0]] = parsed[1];
  });

  return config;
};
