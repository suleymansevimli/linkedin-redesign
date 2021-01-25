import React from "react";
import Account from "../../components/cards/account/AccountCard";

export default {
    title: "Components/Cards",
    component: Account
}

export const AccountCard = (args) => {
    return <Account {...args} />;
}

AccountCard.args = {
    user : {
        cover: "/img/cover.svg",
        avatar: "/img/user/nick-rybak.png"
    },
    statics : {
        viewedProfile : "205",
        viewedLastPost: "9,767"
    }
}
