
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('ingredients_id');
    table.foreign('ingredient').references('meal_id').inTable('meals');
    table.integer('amount');
    table.integer('unit');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
