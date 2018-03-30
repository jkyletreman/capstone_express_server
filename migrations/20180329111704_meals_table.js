
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', (table) => {
    table.increments();
    table.string("name");
    table.string("time");
    table.text('tags');
    table.enu('difficulty', ['Easy', 'Medium', 'Hard']);
    table.text('instructions');
    table.text('summary');
    table.string('img');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};
