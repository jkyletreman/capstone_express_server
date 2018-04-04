const knex = require('../db');

function getSmallCardInfo() {
  return knex('meals')
    .select('id', 'name', 'summary', 'img');
};

function getIngredientsfromMeals(req) {
  const ids = req.query.ids.split(',')
                           .map(id => parseInt(id, 10))

  return knex('ingredients')
    .whereIn('id', ids)
    .select('name', 'amount', 'unit')
}

module.exports = {
  getIngredientsfromMeals,
  getSmallCardInfo
};
