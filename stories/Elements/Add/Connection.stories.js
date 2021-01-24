import React from "react";
import Connection from "../../../components/elements/add/Connection";

export default {
    title: "Components/Connection",
    component: Connection
}

export const ConnectionElement = (args) => {
    return (
        <div className={"connection-container"}>
            <Connection {...args} />
        </div>
    )
}

ConnectionElement.args = {
    logo: process.env.STORYBOOK_DOMAIN+"/img/user/logo-1.png",
    name: "App Service Agency",
    sector: "Company / IT",
    action: ()=>alert("add to feed")
}
