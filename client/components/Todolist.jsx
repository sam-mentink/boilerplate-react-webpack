import React from 'react'
import Todoitem from './Todoitem'

export default React.createClass({
  render() {
    return (
      <div id="Item-List">
        {this.props.todos.map((todo) => {
          return <Todoitem
            key={todo.id}
            todo={todo.todo}
            isComplete={todo.isComplete} />
        })}
      </div>
    )
  }
})
