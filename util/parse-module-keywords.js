'use strict';

module.exports = function(input, options) {
  options = options || {};

  var output = '';
  var list = input.split(',');
  var tabs = options.tabs || false;
  var newline = options.newline || false;

  list.forEach(function(entry, index) {
    var isLast = index === list.length - 1;

    if(tabs) {
      var size = typeof tabs === 'number' ? tabs + 1 : 2;
      output += new Array(size).join('\t');
    }

    output += '"' + entry + '"';

    if(!isLast) {
      output += ', ' + (options.newline ? '\n' : '');
    }
  });

  return output;
};
