import React from "react";
import style from './network-card.module.css'
import Menu from "../../elements/menu/Menu";
import {Connections, Contacts, Following, Group, Hashtag, News, Pages, Teammates} from "../../icons";
import Card from "../Card";

const NetworkCard = () => {
    return (
        <Card>
            <Menu className={style.item} icon={<Connections/>} text={"Connections"}/>
            <Menu className={style.item} icon={<Teammates/>} text={"Teammates"}/>
            <Menu className={style.item} icon={<Contacts/>} text={"Contacts"}/>
            <Menu className={style.item} icon={<Following/>} text={"Following"}/>
            <Menu className={style.item} icon={<Group/>} text={"Group"}/>
            <Menu className={style.item} icon={<Pages/>} text={"Pages"}/>
            <Menu className={style.item} icon={<News/>} text={"News"}/>
            <Menu className={style.item} icon={<Hashtag/>} text={"Hashtag"}/>
        </Card>
    )
}

export default NetworkCard;