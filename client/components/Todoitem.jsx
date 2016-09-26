import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="item">
         <input type="checkbox" /> {this.props.text}
      </div>
    )
  }
})
