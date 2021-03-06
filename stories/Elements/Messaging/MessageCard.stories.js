import React from "react";
import MessageComp from "../../../components/elements/messaging/card/MessageCard";

export default {
    title: "Components/Messaging",
    component: MessageComp
}

export const Message = (args) => {
    return <MessageComp {...args}/>
}

Message.args = {
    onClick: () => alert("Nick Rybak"),
    avatar: process.env.STORYBOOK_DOMAIN+"/img/user/nick-rybak.png",
    name: "Nick Rybak",
    lastMessage: "Hello guys this is Linkedin redesign concept, enjoy !"
}
