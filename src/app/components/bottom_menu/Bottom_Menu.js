import React, { Component, PropTypes } from 'react';
import style from './Bottom_Menu.scss'
import search_icon_image from './../../asset/search.png'
import like_icon_image from './../../asset/like.png'
import send_icon_image from './../../asset/send.png'
import chat_icon_image from './../../asset/chat.png'
import avartar_icon_image from './../../asset/avatar.png'

class Bottom_Menu extends Component {
    constructor(){
        //initial constructor
        super()
    }
    render() {
        return (
            <div className={style.Bottom_Menu}>
                <div className={style.Menu_Item}>
                    <img src={search_icon_image} />
                    <p>EXPLORE</p>
                </div>
                <div className={style.Menu_Item}>
                    <img src={like_icon_image} />
                    <p>SAVED</p>
                </div>
                <div className={style.Menu_Item}>
                    <img src={send_icon_image} />
                    <p>TRIPS</p>
                </div>
                <div className={style.Menu_Item}>
                    <img src={chat_icon_image} />
                    <p>INBOX</p>
                </div>
                <div className={style.Menu_Item}>
                    <img src={avartar_icon_image} />
                    <p>PROFILE</p>
                </div>
            </div>
        );
    }
}

Bottom_Menu.propTypes = {

};

export default Bottom_Menu;