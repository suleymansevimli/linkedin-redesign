import React from "react";
import AdsCardComp from "../../components/cards/advertisement/AdsCard";

export default {
    title: "Components/Cards",
    component: AdsCardComp
}

export const AdsCard = (args) => {
    return <AdsCardComp {...args} />
}

AdsCard.args = {
    logo : "http://localhost:3000/img/logo/linkedin-logo.png",
    title: "See you at Linkedin",
    link : {
        url: "https://www.linkedin.com/in/suleymansevimli/",
        label: "linkedin.com/in/suleymansevimli"
    }
}
