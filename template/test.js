'use strict';

var <%= moduleVariable %> = require('./');
var test = require('tape');

test('<%= moduleName %> test suite', function(t) {
  t.equal(<%= moduleVariable %>('foo'), true, '');
  t.end();
});
