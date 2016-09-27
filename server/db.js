var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
getTodo: getTodo,
add: add,
complete: complete
}

function getTodo() {
  return knex('todo')
  .select()
}

function add(data) {
  return knex('todo')
  .insert({todo: data.todo, isComplete: data.isComplete})
}

function complete(data) {
  return knex('todo')
  .where('id', '=', data.id)
  .update({ isComplete: data.isComplete})
}
