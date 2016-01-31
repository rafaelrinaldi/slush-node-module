'use strict';

const addZero = require('add-zero');

module.exports = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = addZero(now.getMonth() + 1);
  const date = addZero(now.getDate());

  return `${year}/${month}/${date}`;
};
