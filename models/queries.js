const knex = require('../db');

function getSmallCardInfo() {
  return knex('meals')
    .select('id', 'name', 'summary', 'img');
};

function getIngredientsfromMeals() {
  return knex('ingredients')
    .where('id', 1)
    .select('name', 'amount', 'unit')
}

module.exports = {
  getIngredientsfromMeals,
  getSmallCardInfo
};
