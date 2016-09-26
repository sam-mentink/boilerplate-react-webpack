import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="Add-to-do">
        <input type="text" name="to-do" placeholder="enter to do" />
        <input type="submit" value="add" />
      </div>
    )
  }
})
