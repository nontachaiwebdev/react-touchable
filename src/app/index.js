import React from 'react'
import ReactDOM from 'react-dom'
import App_Routes from './components/app_routes'

window.onload = () => {
  ReactDOM.render(<App_Routes/>, 
  document.getElementById('main'))
};