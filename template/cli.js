'use strict';

const <%= moduleconstiable %> = require('./');
const minimist = require('minimist');
const version = require('./package.json').version;
const multiline = require('multiline');
const defaults = {
  boolean: [
    'help',
    'version'
  ],
  alias: {
    h: 'help',
    v: 'version'
  }
};

/* eslint-disable */
const help = multiline(function() {/*

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

exports.parse = options => minimist(options, defaults);

exports.run = argv => {
  // Reset status code at each run
  exports.exitCode = 0;

  if (argv.help) {
    exports.stderr.write(help);
    return;
  }

  if (argv.version) {
    exports.stderr.write(`hn-cli v${version}\n`);
    return;
  }

  run(argv);
};
