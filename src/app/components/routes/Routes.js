import React from 'react'
import { render } from 'react-dom'
import { Route,IndexRoute } from 'react-router'
import Home from './../home'
import Dashboard from './../dashboard'
import About from './../about'

const Routes = (
  <Route path="/">
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} >
    </Route>
  </Route>
)

export default Routes