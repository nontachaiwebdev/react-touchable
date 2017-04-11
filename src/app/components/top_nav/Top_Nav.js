import React from 'react'
import { Link } from 'react-router'
import List from './../list'
import Font_Awesome from 'font-awesome-webpack2'
import style from './Top_Nav.scss'
import menu_img from './../../asset/menu.png'
import map_img from './../../asset/map.png'


export default class Top_Nav extends React.Component {
  render() {
    return (
		<div className={style.Topbar_Container}>
			<div className={style.Top_Nav_container}>
				<div className={style.Search_Box}>
					<input type="text" placeholder="&#xf002;&nbsp;&nbsp;Anywhere : Anytime : 1 Guest" />
				</div>
			</div>
			<div >
				<div className={style.optionBar}>
					<ul>
						<li>FOR YOU</li>
						<li>ATTRACTIONS</li>
						<li>FOOD & DRINK</li>
						<li>HOTEL</li>
					</ul>
				</div>
			</div>
		</div>
    );
  }
}