
exports.up = function(knex, Promise) {
  return knex.schema.createTable ('todo', function(table) {
    table.increments('id').primary()
    table.string('todo')
    table.boolean('isComplete')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo')
};
