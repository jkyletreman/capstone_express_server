const knex = require('../db');

function getSmallCardInfo() {
  return knex('meals')
    .select('id', 'name', 'summary', 'img');
};

function getIngredientsfromMeals(req) {
  const ids = req.query.ids.split(',')
                           .map(id => parseInt(id, 10))

  return knex('ingredients')
    .whereIn('ingredient_id', ids)
    .select('id', 'name', 'amount', 'unit')
}


function getAllCardInfo(req) {
  const id = req.query.id

  return knex('meals')
    .select('*')
    .where("meals.id", 1)
    .join('ingredients', {'meals.id': "ingredients.id"})
}

module.exports = {
  getIngredientsfromMeals,
  getSmallCardInfo,
  getAllCardInfo
};
