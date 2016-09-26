
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        knex('todo').insert({todo: 'Get Coffee', isComplete: false}),
        knex('todo').insert({todo: 'Get lunch', isComplete: true})
      ]);
    });
};
