import React from "react";
import Menu from "../../../components/elements/menu/Menu";
import Home from "../../../components/icons/Home";
import {Network} from "../../../components/icons";

export default {
    title: "Components/Menu",
    component: Menu,
    argTypes: {
        active: {
            control: 'boolean'
        },
        icon: {
            control: "disable",
            description: "Icon must be `node` type"
        },
        text: {
            control: "text",
            max: "4"
        }
    }
}

export const Passive = (args) => {
    return (
        <div className={"menu-container"}>
            <Menu {...args}/>
        </div>
    )
}

Passive.args = {
    icon: <Home/>,
    text: "Home"
}

export const Notify = (args) => {
    return (
        <div className={"menu-container"}>
            <Menu {...args} />
            <Menu icon={<Network/>} text={"Network"}/>
        </div>
    )
}

Notify.args = {
    icon: <Home/>,
    text: "Home",
    active: false,
    notify: "1"
}


export const Active = (args) => {
    return (
        <div className={"menu-container"}>
            <Menu {...args}/>
        </div>
    )
}

Active.args = {
    icon:<Home/>,
    text:"Home",
    active: true
}

