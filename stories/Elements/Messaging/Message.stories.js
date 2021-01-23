import React from "react";
import Message from "../../../components/elements/messaging/message/Message";

export default {
    title: "Components/Messaging",
    component: Message
}

export const ForMe = (args) => {
    return <Message {...args}/>
}

ForMe.args = {
    type: "forMe",
    user: {
        avatar: "http://localhost:3000/img/user/jane-cooper.png"
    },
    content: "Duis proin eu sagittis fermentum eget pharetra libero augue dui. Suscipit volutpat fames tincidunt.",
    time: "5:10 AM"
}

export const FromMe = (args) => {
    return <Message {...args} />
}

FromMe.args = {
    type: "fromMe",
    user: {
        avatar: "http://localhost:3000/img/user/jane-cooper.png"
    },
    content: "Duis proin eu sagittis fermentum eget pharetra libero augue dui. Suscipit volutpat fames tincidunt.",
    time: "5:10 AM"
}
