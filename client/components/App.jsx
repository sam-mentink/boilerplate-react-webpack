import React from 'react'
import request from 'superagent'

import Header from './Header'
import Addtodo from './Addtodo'
import Todolist from './Todolist'
import todoapi from './todoapi'

export default React.createClass({
  getInitialState () {
    return {
      todos: []
    }
  },

  componentDidMount () {
    todoapi.getTodos(this.renderTodos)
  },

  renderTodos (err, todos) {
    this.setState({
      todos: todos
    })
  },

  render() {
    return (
      <div>
        <p>Todo Here: </p>
      <Header text="🚬 This to-do list will make you wanna... 🚬" />
      <Addtodo />
      <Todolist todos={this.state.todos} />
      </div>
    )
  }
})
