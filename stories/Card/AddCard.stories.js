import React from "react";
import Add from "../../components/cards/add/AddCard";

export default {
    title: "Components/Cards",
    component: Add
}

export const AddCard = (args) => {
    return <Add {...args} />
}
