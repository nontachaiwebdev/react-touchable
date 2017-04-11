import React, { Component, PropTypes } from 'react'
import Explore_Item from './../explore_item'
import style from './Explore_List.scss'

class Explore_List extends Component {
    constructor(){
        //initial constructor
        super()
        this.mode = 'disable'
        this.last_top_position = null
        this.firsttouch = false
        this.lastx = null
        this.TouchMove = this.TouchMove.bind(this)
        this.TouchEnd = this.TouchEnd.bind(this)
        this.TouchStart = this.TouchStart.bind(this)
        this.state = {x:0}
        this.window_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        this.margin_between_item = (this.window_width*2.5)/100
        this.container_margin = (this.window_width*5)/100
        this.width_item = (this.window_width*40)/100
        this.height_item = (this.width_item*4)/3
        this.total_width_container = (this.margin_between_item+this.width_item)*10
        this.last_element = this.total_width_container-(this.window_width*95)/100
        this.itemstyle = { 
            'marginRight': this.margin_between_item+'px',
            'width': this.width_item+'px'
        }
        this.imagestyle = {
            'width': this.width_item+'px',
            'height': this.height_item+'px',
        }
        this.topsection_style = {
          'padding': '0 '+this.container_margin+'px'
        }
    }
    TouchMove(e){
        //Check and change mode from 'disable' and 'enable'
        if(this.mode === 'disable'&&this.last_top_position !== null){
            if(document.body.getBoundingClientRect().top === this.last_top_position){
                if(this.firsttouch === true)
                    this.firsttouch = false
                else{
                    document.body.style.overflowY = "hidden"
                    this.mode = 'enable'
                }
            }
        }
        else{
            var distance = e.touches[0].screenX - this.lastx
            if(distance>0){
                var now_x_position = this.state.x
                now_x_position += distance
                this.setState({
                    x:now_x_position
                })
            }
            else{
                distance = distance * -1
                var now_x_position = this.state.x
                now_x_position -= distance
                this.setState({
                    x:now_x_position
                })
            } 
            this.lastx = e.touches[0].screenX
        } 
    }
    TouchEnd(e){
        document.body.style.overflowY = "auto"
        this.mode = 'disable'
        if(this.state.x<0){
            const pointer = (this.state.x*-1)
            if(pointer > this.last_element){
                this.setState({
                    x:this.last_element*-1
                })
            }
            else{
                const image_position_counter = pointer/(this.width_item+this.margin_between_item)
                const image_position_counter_result = Math.round(image_position_counter)
                if(image_position_counter_result>=8){
                    this.setState({
                        x:this.last_element*-1
                    })
                }
                else{
                    const final_position = ((image_position_counter_result*(this.width_item+this.margin_between_item))*-1)
                    this.setState({
                        x:final_position
                    })
                }
            }
        }
        else{
            this.setState({
                x:0
            })
        } 
    }
    TouchStart(e){
        //Get important value from boby DOM
        this.last_top_position = document.body.getBoundingClientRect().top
        this.firsttouch = true
        this.lastx = e.touches[0].screenX 
    }
    render(){
        const css = 'translate('+this.state.x+'px, 0px)'
        var inline_style = {
            'transform': css,
            'marginLeft' : this.container_margin+'px',
            'width' : this.total_width_container+'px'
        }
        const show_list = this.props.items.map((item)=>
            <Explore_Item 
                key={item.id}
                item_style={ this.itemstyle } 
                image_style={ this.imagestyle } 
                name={item.name}
                reviews={item.reviews}
                star={item.star}
                image={item.image_url}
            />
        )
        return(
            <div className={style.List_Style}>
                <div className={style.Explore_List_Top_Section} style={this.topsection_style}>
                <p className={style.Section_Name}>
                    {this.props.name}
                </p>
                <p className={style.Seemore_Button}>
                    See all >
                </p>
                </div>
                <div 
                    className={style.Main_Container}
                    onTouchMove={this.TouchMove}
                    onTouchStart={this.TouchStart}
                    onTouchEnd={this.TouchEnd}
                >
                    <div className={style.Box_Container} style={ inline_style } >
                        { show_list }
                    </div>
                </div>
            </div>
        )
    }
}

Explore_List.propTypes = {

}

export default Explore_List