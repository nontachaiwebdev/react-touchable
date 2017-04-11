import React, { Component } from 'react'
import style from './Explore_Item.scss'

export default class Explore_Item extends Component{
    constructor(){
        super()
    }
    render(){
        var star = []
        for(var i=0;i<this.props.star;i++)
            star.push(i)
        const show_star = star.map((i)=>
            <i key={i} className="fa fa-star" aria-hidden="true"></i>
        )
        return(
            <div className={style.Box} style={this.props.item_style}>
                <img className={style.images} style={this.props.image_style} />
                <div className={style.name}>
                    <p>{this.props.name}</p>
                </div>
                <div className={style.review}>
                    { show_star }
                    <div className={style.review_count}>
                        {this.props.reviews}&nbsp;&nbsp;&nbsp;Reviews
                    </div>
                </div>
            </div>
        )
    }
}