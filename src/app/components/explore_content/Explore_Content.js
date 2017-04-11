import React from 'react'
import style from './Explore_Content.scss'
import Explore_List from './../explore_List'
import data from './../../asset/data.json'

class Explore_Content extends React.Component {
  constructor(){
        //initial constructor
        super()
        
    }
    render(){
        const show_main_list = data.map((item)=>
            <Explore_List 
                key={item.id}
                name={item.name}
                items={item.items}
            />
        ); 
        return(
            <div className={style.Explore_List_Main_Container}>
            { show_main_list }
            </div>
        )
    }
}

export default Explore_Content