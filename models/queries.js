const knex = require('../db');

function testQuery() {
  return knex('meals')
    .select('name', 'summary', 'img')
};

function getSmallCardInfo() {
  return knex('meals')
    .select('name', 'summary', 'img');
};

module.exports = {
  testQuery,
  getSmallCardInfo
};
