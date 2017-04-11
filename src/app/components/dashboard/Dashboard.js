import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router'
import style from './Dashboard.scss'
import Top_Nav from './../top_nav'
import Explore_Content from './../explore_content'
import Bottom_Menu from './../bottom_menu'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Top_Nav/> 
        <Explore_Content/>
        <Bottom_Menu/>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;