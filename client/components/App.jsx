import React from 'react'
import Header from './Header'
import Addtodo from './Addtodo'
import Todolist from './Todolist'

export default React.createClass({
  render() {
    return (
      <div>
      <Header text="🚬 This to-do list will make you wanna... 🚬" />
      <Addtodo />
      <Todolist text="Gone to get coffee"/>
      </div>
    )
  }
})
