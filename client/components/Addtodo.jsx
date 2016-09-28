import React from 'react'

let todoInput = null

export default React.createClass({
  render() {
    return (
      <div id="Add-to-do">
        <input type="text" name="todo" placeholder="enter to do"
          ref={input => todoInput = input} />
        <input
          type="submit"
          value="add"
          onClick={() => this.props.addTodo(todoInput.value)} />
      </div>
    )
  }
})
