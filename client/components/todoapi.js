import request from 'superagent'

export default {
  getTodos: getTodos,
  addTodo: addTodo
}

function getTodos (cb) {
  let data = []
  request
    .get('/todo')
    .end((err, res) => {
      if(!err) {
        data = res.body
        cb(null, data)
      } else  {
        cb(err)
      }
    })
}

function addTodo (text) {
  request
  .post('/add')
  .send({text: text})
  .end()
}
