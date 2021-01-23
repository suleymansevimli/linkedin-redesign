import React from "react";
import PropTypes from 'prop-types'
import style from "./suggestion-card.module.css"
import Card from "../Card";
import cn from "classnames";
import SuggestionCard from "../network/suggestion/SuggestionCard";

const SuggestionCardContainer = () => {

    const users = [
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/jane-cooper.png",
            name: "Jane Cooper"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/guy-hawkings.png",
            name: "Guy Hawkings"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/robert-fox.png",
            name: "Robert Fox"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/jane-cooper.png",
            name: "Jane Cooper"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/vladimir.png",
            name: "vladimir"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/jane-cooper.png",
            name: "Jane Cooper"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/guy-hawkings.png",
            name: "Guy Hawkings"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/robert-fox.png",
            name: "Robert Fox"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/jane-cooper.png",
            name: "Jane Cooper"
        },
        {
            job: "Software Engineer ",
            cover: "http://localhost:3000/img/suggestion-cover.png",
            avatar: "http://localhost:3000/img/user/vladimir.png",
            name: "vladimir"
        }
    ]


    return (
        <Card classname={style.card}>
            <div className={style.suggestionCard}>
                <div className={style.cardTitle}>
                    <h3 className={cn([style.title, "semi-bold"])}>People may you know</h3>
                    <p className={cn([style.manage, "regular"])}>See all</p>
                </div>

                <div className={style.suggestions}>
                    <SuggestionCard user={users[0]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[1]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[2]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[3]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[4]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[5]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[6]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>

                    <SuggestionCard user={users[7]}
                                    connections={"Nick Rybak and 131 others"}
                                    onDecline={() => alert("declined")}
                                    onAccept={() => alert("accepted")}/>
                </div>

            </div>
        </Card>
    )
}

export default SuggestionCardContainer;