'use strict';

const exec = require('child_process').execSync;
const _ = require('./');

module.exports = () => {
  let result = exec('git config --list').toString();
  return _.parseGitConfig(result);
};
