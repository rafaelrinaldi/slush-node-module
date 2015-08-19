#!/usr/bin/env node

'use strict';

var meow = require('meow');
var <%= moduleVarible %> = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ <%= moduleName %> [input]',
		'',
		'Examples',
		'  $ <%= moduleName %> ping',
		'  pong',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(<%= moduleVariable %>(cli.input[0] || 'ping'));
