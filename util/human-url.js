'use strict';

const parseUrl = require('url').parse;

module.exports = url => {
  if (!url) {
    return '';
  }

  const protocol = parseUrl(url).protocol + '//';

  return url
            .replace(protocol, '')
            .replace('www.', '');
};
