import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
