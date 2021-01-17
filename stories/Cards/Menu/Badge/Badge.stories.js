import React from "react";
import Badge from "../../../../components/cards/menu/badge/Badge";

export default {
    title: "Components/Cards",
    component: Badge
}

export const Number = () => {
    return (
        <div className={"badge-container"}>
            <Badge> 1 </Badge>
        </div>
    )
}
