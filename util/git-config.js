'use strict';

var exec = require('child_process').execSync;
var _ = require('./');

module.exports = function() {
  var result = exec('git config --list').toString();
  return _.parseGitConfig(result);
};
