const knex = require('../db');

function testQuery() {
  return knex('ingredients');
}

module.exports = {
  testQuery
};
