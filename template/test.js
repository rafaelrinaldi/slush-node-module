'use strict';
<% if (hasCli) { %>
const <%= moduleVariable %> = require('./');
const test = require('tape');

test('test shall fail', t => {
  t.fail();
});
<% } else { %>
var <%= moduleVariable %> = require('./');
var test = require('tape');

test('test shall fail', function(t) {
  t.fail();
});
<% } %>
