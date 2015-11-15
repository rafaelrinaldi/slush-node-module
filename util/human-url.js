'use strict';

var parseUrl = require('url').parse;

module.exports = function(url) {
  if(!url) {
    return '';
  }

  var protocol = parseUrl(url).protocol;

  return url
            .replace(protocol, '')
            .replace('www.', '');
};
