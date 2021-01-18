import React from "react";
import BadgeComp from "../../../../components/elements/menu/badge/Badge";

export default {
    title: "Components/Menu",
    component: BadgeComp
}

export const Badge = () => {
    return (
        <div className={"badge-container"}>
            <BadgeComp> 1 </BadgeComp>
        </div>
    )
}
