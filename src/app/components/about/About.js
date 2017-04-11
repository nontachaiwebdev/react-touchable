import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'


export default class About extends React.Component {
  render() {
    return (
        <div>
            <h1>This is About Component</h1>
            <Link to="/">Dashboard</Link>
        </div>
    );
  }
}