var db = require('./db')

module.exports = {
 getTodo: getTodo,
 add: add,
 complete: complete
}

function getTodo(req, res) {
  db.getTodo()
    .then(function (todos) {
      res.json(todos)
    })
    .catch(console.error)
}

function add(req, res) {
  var newTodo = {
    todo: req.body.text,
    isComplete: false
  }
  db.add(newTodo)
  .then(function () {
    res.send(204)
  })
  .catch(console.error)
}

function complete(req, res) {
  var todoStatus = {
    id: req.body.id,
    isComplete: req.body.isComplete
  }
  db.complete(todoStatus)
  .then(function () {
    res.send(204)
  })
  .catch(console.error)
}
