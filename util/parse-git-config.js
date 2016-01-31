'use strict';

/**
* // Converts this:
* 'user.name=Rafael Rinaldi\nuser.email=rafael@rinaldi.io\n'
* // Into this:
* {'user.name': 'Rafael Rinaldi', email: 'rafael@rinaldi.io'}
*/
module.exports = raw => {
  let config = {};

  raw
    .trim()
    .split(/\n/)
    .forEach(value => {
      let parsed = value.split('=');
      config[parsed[0]] = parsed[1];
  });

  return config;
};
