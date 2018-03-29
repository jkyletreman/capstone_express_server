
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', (table) => {
    table.increments('id');
    table.string("Name");
    table.string("Time");
    table.enu('Tags', ['Spring', 'Summer', 'Fall', 'Winter', 'Chicken', 'Beef', 'Fish', 'Pork', 'Vegetarian']);
    table.enu('Difficulty', ['Easy', 'Medium', 'Hard']);
    table.text('Instructions');
    table.string('img');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};
