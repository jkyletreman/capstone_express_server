const knex = require('../db');

function getSmallCardInfo() {
  return knex('meals')
    .select('id', 'name', 'summary', 'img');
};

function getIngredientsfromMeals(req) {
  const ids = req.query
                 .split(' ')
                 .map(id => parseInt(id, 10))
                 .join(' ')

  return knex('ingredients')
    .whereIn('id', ids)
    .select('name', 'amount', 'unit')
}

module.exports = {
  getIngredientsfromMeals,
  getSmallCardInfo
};
