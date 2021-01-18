import React from "react";
import Menu from "../../elements/menu/Menu";
import {Connections, Contacts, Following, Group, Hashtag, News, Pages, Teammates} from "../../icons";
import Card from "../Card";

const NetworkCard = () => {
    return (
        <Card>
            <Menu icon={<Connections/>} text={"Connections"}/>
            <Menu icon={<Teammates/>} text={"Teammates"}/>
            <Menu icon={<Contacts/>} text={"Contacts"}/>
            <Menu icon={<Following/>} text={"Following"}/>
            <Menu icon={<Group/>} text={"Group"}/>
            <Menu icon={<Pages/>} text={"Pages"}/>
            <Menu icon={<News/>} text={"News"}/>
            <Menu icon={<Hashtag/>} text={"Hashtag"}/>
        </Card>
    )
}

export default NetworkCard;