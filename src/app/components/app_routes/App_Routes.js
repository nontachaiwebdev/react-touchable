import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import Routes from './../routes'
import Home from './../home'
import Dashboard from './../dashboard'
import About from './../about'


export default class App_Routes extends React.Component {
  render() {
    return (
      <Router routes={Routes} history={browserHistory} />
    );
  }
}