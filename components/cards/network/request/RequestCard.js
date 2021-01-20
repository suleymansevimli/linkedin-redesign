import React from "react";
import cn from 'classnames';
import style from "./request-card.module.css"
import Card from "../../Card";
import Person from "../../../elements/network/request/person/Person";

const RequestCard = () => {

    const users = [
        {
            user: {
                avatar: "http://localhost:3000/img/user/vladimir.png",
                name: "Vladimir Lupinskiy",
                job: "UI/UX designer - Celadon",
            },
            connections: "Tatsiana Zhukouskaya and 810 others",
            onAccept: () => alert("accepted"),
            onIgnore: () => alert("ignored")
        },
        {
            user: {
                avatar: "http://localhost:3000/img/user/jane-cooper.png",
                name: "Jane Cooper",
                job: "SMM Manager - Fifty Five Agency",
            },
            connections: "Nick Rybak and 810 others",
            onAccept: () => alert("accepted"),
            onIgnore: () => alert("ignored")
        }
    ]

    return (
        <Card classname={style.card}>
            <div className={style.requestCard}>
                <div className={style.cardTitle}>
                    <h3 className={cn([style.title, "semi-bold"])}>Invitations</h3>
                    <p className={cn([style.manage, "regular"])}>Manage</p>
                </div>

                <div className={style.content}>
                    <Person {...users[0]} />
                    <Person {...users[1]} />
                </div>
            </div>
        </Card>
    )
}

export default RequestCard;