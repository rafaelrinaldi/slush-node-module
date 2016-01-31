'use strict';

module.exports = (input, options) => {
  options = options || {};

  let output = '';

  const list = input.split(',');
  const tabs = options.tabs || false;
  const newline = options.newline || false;
  const soft = options.soft || true;

  list.forEach((entry, index) => {
    const isLast = index === list.length - 1;

    if (tabs) {
      const size = typeof tabs === 'number' ? tabs + 1 : 2;
      const tab = soft ? ' ' : '\t';

      output += new Array(size).join(tab);
    }

    output += '"' + entry + '"';

    if (!isLast) {
      output += ',' + (options.newline ? '\n' : '');
    }
  });

  return output;
};
