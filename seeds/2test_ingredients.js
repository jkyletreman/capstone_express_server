
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients").del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {id: 1, ingredient_id: 1, name: "Chicken", amount: 1, unit: "pound"},
        {id: 2, ingredient_id: 1, name: "Buffalo sauce", amount: 8, unit: "ounces"},
        {id: 3, ingredient_id: 1, name: "Butter", amount: 4, unit: "tablespoons"},
        {id: 4, ingredient_id: 2, name: "Chicken", amount: 1, unit: "pound"},
        {id: 5, ingredient_id: 2, name: "Seasoning", amount: 2, unit: "tablespoons"},
      ]);
    });
};
