'use strict';

var <%= moduleVariable %> = require('./');
var minimist = require('minimist');
var multiline = require('multiline');
var defaults = {
  boolean: [
    'help',
    'version'
  ],
  alias: {
    h: 'help',
    v: 'version'
  }
};
var version = require('./package.json').version;

/* eslint-disable */
var help = multiline(function() {/*

Usage: <%= moduleName %> [PATH] [OPTIONS]

  <%= moduleDescription %>

Example:
  <%= moduleName %> .

Options:
  -v --version              Display current software version.
  -h --help                 Display help and usage details.


*/});
/* eslint-enable */

// Must be ≠ 0 if any errors occur during execution
exports.exitCode = 0;

// Allow mocking the stdout/stderr
exports.stdout = process.stdout;
exports.stderr = process.stderr;

exports.parse = function(options) {
  return minimist(options, defaults);
};

exports.run = function(argv) {
  // Reset status code at each run
  exports.exitCode = 0;

  if(argv.help) {
    exports.stderr.write(help);
    return;
  }

  if(argv.version) {
    exports.stderr.write('<%= moduleName %> v' + version + '\n');
    return;
  }

  run(argv);
};

function run(argv) {
  <%= moduleVariable %>(argv);
}

function logError(error) {
  var message = typeof error === 'string' ? error : error.message;

  exports.exitCode = 1;

  exports.stderr.write(message + '\n');
}
