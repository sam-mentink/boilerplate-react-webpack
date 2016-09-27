import React from 'react'
import Header from './Header'
import Addtodo from './Addtodo'
import Todolist from './Todolist'


let data = []
request
  .get('http://localhost:3000/todo')
  .end((err, res) => {
    console.log(res)
    if(!err) {
      data = res.body
    }
  })

export default React.createClass({
  render() {
    return (
      <div>
        <p>Todo Here: </p>
      <Header text="🚬 This to-do list will make you wanna... 🚬" />
      <Addtodo />
      <Todolist text="Gone to get coffee"/>
      </div>
    )
  }
})
