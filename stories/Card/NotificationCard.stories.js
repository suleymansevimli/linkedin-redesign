import React from "react";
import Notification from "../../components/cards/notification/Notification";

export default {
    title: "Components/Cards",
    component: Notification
}

export const NotificationCard = (args) => {
    return <Notification {...args} />
}

NotificationCard.args = {
    user: {
        avatar: "http://localhost:3000/img/user/jane-cooper.png",
        name: "Jane Cooper"
    },
    action: "liked your post",
    time: "55m ago",
    postContent: {
        text: "Id malesuada cursus felis, neque. Eu ullamcorper lorem lacus aenean sit. Fringilla purus ornare at orci mauris, et dictum. Risus nulla consectetur mollis eget amet. Sollicitudin vel aliquet pellentesque dolor nunc sit tellus. Sit nunc id maecenas tellus interdum mauris enim. Dui lobortis tellus, tincidunt in non aliquam integer maecenas nullam.",
    },
    footer: "LinkedIn redesign concept",
    reactions: {
        reaction: "27",
        comment: "11"
    }

}