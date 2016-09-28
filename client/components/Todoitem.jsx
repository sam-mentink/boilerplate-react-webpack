import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="item">
         <button> complete </button>      {this.props.todo}
      </div>
    )
  }
})
