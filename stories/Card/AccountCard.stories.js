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
        cover: "http://localhost:3000/img/cover.svg",
        avatar: "http://localhost:3000/img/user/nick-rybak.png"
    },
    statics : {
        viewedProfile : "205",
        viewedLastPost: "9,767"
    }
}
