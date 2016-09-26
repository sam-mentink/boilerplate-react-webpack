var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var development = require('../knexfile').development
var knex = require('knex')(development)

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/../client')))

app.get('/todo', function(req, res) {
  knex('todo')
    .select()
    .then(function (todo) {
      var vm = {
        todo: todo
      }
      res.send(vm)
    })
    .catch(console.error)
})

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
