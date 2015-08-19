'use strict';

var parseUrl = require('url').parse;

module.exports = function(url) {
  if(!url) {
    return '';
  }

  return parseUrl(url).host.replace('www.', '');
};
