import request from 'superagent'

export default {
  getTodos: getTodos
}

function getTodos (cb) {
  let data = []
  request
    .get('http://localhost:3000/todo')
    .end((err, res) => {
      if(!err) {
        data = res.body
        cb(null, data)
      } else  {
        cb(err)
      }
    })
}
