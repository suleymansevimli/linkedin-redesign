import React from "react";
import cn from 'classnames'
import style from "./messaging-card.module.css"
import Card from "../Card";
import {AddMessage, Options} from "../../icons";
import Message from "../../elements/messaging/Message";
import Search from "../../elements/Search/Search";

const MessagingCard = () => {
    return (
        <Card>
            <div className={style.messagingCard}>
                <div className={style.cardTitle}>
                    <h3 className={cn([style.title, "semi-bold"])}>Messaging</h3>
                    <AddMessage className={style.addMessage}/>
                    <Options className={style.options}/>
                </div>

                <div className={style.search}>
                    <Search placeholder={"Search in messages"}/>
                </div>

                <div className={style.messages}>

                    <Message
                        onClick={() => alert("nick rybak")}
                        name={"Nick Rybak"}
                        avatar={"http://localhost:3000/img/user/nick-rybak.png"}
                        lastMessage={"Hi guys ! This is Linkedin redesign concept, enjoy !"}/>

                    <Message
                        onClick={() => alert("Jane Cooper")}
                        name={"Jane Cooper"}
                        avatar={"http://localhost:3000/img/user/jane-cooper.png"}
                        lastMessage={"Tellus hac duis eleifend iaculis fames quam sed quam."}/>

                    <Message
                        onClick={() => alert("Darrell Steward")}
                        name={"Darrell Steward"}
                        avatar={"http://localhost:3000/img/user/darrell-steward.png"}
                        lastMessage={"Magna lorem nulla vitae habitasse elementum."}/>

                </div>
            </div>
        </Card>
    )
}

export default MessagingCard;