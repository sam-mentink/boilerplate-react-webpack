import React from 'react'
import Todoitem from './Todoitem'

export default React.createClass({
  render() {
    return (
      <div id="Item-List">
        <Todoitem text={this.props.text}/>
      </div>
    )
  }
})
