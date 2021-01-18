import React from "react";
import style from './menu-card.module.css'
import Menu from "../../elements/menu/Menu";
import {Home, Job, Message, Network, Notification, Work} from "../../icons";
import Card from "../Card";

const MenuCard = () => {
    return (
        <Card>
            <Menu className={style.item} icon={<Home/>} text={"Home"} active/>
            <Menu className={style.item} icon={<Network/>} text={"Network"} notify={"1"}/>
            <Menu className={style.item} icon={<Job/>} text={"Jobs"}/>
            <Menu className={style.item} icon={<Message style={{fill: "#fff"}}/>} text={"Messaging"}/>
            <Menu className={style.item} icon={<Notification/>} text={"Notification"} notify={"1"}/>
            <Menu className={style.item} icon={<Work/>} text={"Work"}/>
        </Card>
    )
}

export default MenuCard;