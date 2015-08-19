'use strict';

module.exports = function(name) {
  return name
            .toLowerCase()
            .replace(/\s/, '');
};
