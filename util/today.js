'use strict';

var addZero = require('add-zero');
var format = require('util').format;

module.exports = function() {
  var now = new Date();
  var year = now.getFullYear();
  var month = addZero(now.getMonth() + 1);
  var date = addZero(now.getDate());

  return format('%s/%s/%s', year, month, date);
};
