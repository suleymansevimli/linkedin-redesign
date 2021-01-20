import React from "react";
import Person from "../../../../components/elements/network/request/person/Person";

export default {
    title: "Components/Request",
    component: Person
}

export const Request = (args) => {
    return (
        <div className={"request-container"}>
            <Person {...args} />
        </div>
    )
}

Request.args = {
    user: {
        avatar: "http://localhost:3000/img/user/vladimir.png",
        name: "Vladimir Lupinskiy",
        job: "UI/UX designer - Celadon",

    },
    connections: "Tatsiana Zhukouskaya and 810 others",
    onAccept: () => alert("accepted"),
    onIgnore: () => alert("ignored")
}
