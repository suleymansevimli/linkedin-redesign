import React from "react";
import Menu from "../../elements/menu/Menu";
import {Home, Job, Message, Network, Notification, Work} from "../../icons";
import Card from "../Card";

const MenuCard = () => {
    return (
        <Card>
            <Menu icon={<Home/>} text={"Home"} active/>
            <Menu icon={<Network/>} text={"Network"} notify={"1"}/>
            <Menu icon={<Job/>} text={"Jobs"}/>
            <Menu icon={<Message style={{fill: "#fff"}}/>} text={"Messaging"}/>
            <Menu icon={<Notification/>} text={"Notification"} notify={"1"}/>
            <Menu icon={<Work/>} text={"Work"}/>
        </Card>
    )
}

export default MenuCard;