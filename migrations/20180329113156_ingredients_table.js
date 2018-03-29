
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id');
    table.foreign('id').references('id').inTable('meals');
    table.string('name');
    table.integer('amount');
    table.integer('unit');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
