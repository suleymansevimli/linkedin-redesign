import React from "react";
import Suggestion from "../../components/cards/network/suggestion/SuggestionCard";

export default {
    title: "Components/Cards",
    component: Suggestion
}

export const SuggestionCard = (args) => {
    return <Suggestion {...args} />
}

SuggestionCard.args = {
    user: {
        cover: "http://localhost:3000/img/suggestion-cover.png",
        avatar: "http://localhost:3000/img/user/jane-cooper.png",
        name: "Jane Cooper",
        job: "SMM Manager - Orion Soft"
    },
    connections: "Nick Rybak and 317 others",
    onAccept: () => alert("Accepted"),
    onDecline: () => alert("Declined")
}
