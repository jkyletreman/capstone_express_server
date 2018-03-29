
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments();
    table.integer('ingredient_id').references('id').inTable('meals');
    table.string('name');
    table.integer('amount');
    table.string('unit');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
