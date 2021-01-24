import React from "react";
import cn from 'classnames'
import style from "./messaging-card.module.css"
import Card from "../Card";
import {AddMessage, Options} from "../../icons";
import MessageCard from "../../elements/messaging/card/MessageCard";
import Search from "../../elements/search/Search";

const MessagingCard = ({className}) => {
    return (
        <Card classname={cn([style.card,className ? className : ""])}>
            <div className={style.messagingCard}>
                <div className={style.cardTitle}>
                    <h3 className={cn([style.title, "semi-bold"])}>Messaging</h3>
                    <AddMessage className={style.addMessage}/>
                    <Options className={style.options}/>
                </div>

                <div className={style.search}>
                    <Search placeholder={"search in messages"}/>
                </div>

                <div className={style.messages}>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("nick rybak")}
                        name={"Nick Rybak"}
                        avatar={process.env.DOMAIN+"/img/user/nick-rybak.png"}
                        lastMessage={"Hi guys ! "}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Jane Cooper")}
                        name={"Jane Cooper"}
                        avatar={process.env.DOMAIN+"/img/user/jane-cooper.png"}
                        lastMessage={"Tellus hac duis ."}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Darrell Steward")}
                        name={"Darrell Steward"}
                        avatar={process.env.DOMAIN+"/img/user/darrell-steward.png"}
                        lastMessage={"Magna lorem nulla."}/>
                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("nick rybak")}
                        name={"Nick Rybak"}
                        avatar={process.env.DOMAIN+"/img/user/nick-rybak.png"}
                        lastMessage={"Hi guys ! "}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Jane Cooper")}
                        name={"Jane Cooper"}
                        avatar={process.env.DOMAIN+"/img/user/jane-cooper.png"}
                        lastMessage={"Tellus hac duis ."}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Darrell Steward")}
                        name={"Darrell Steward"}
                        avatar={process.env.DOMAIN+"/img/user/darrell-steward.png"}
                        lastMessage={"Magna lorem nulla."}/>
                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("nick rybak")}
                        name={"Nick Rybak"}
                        avatar={process.env.DOMAIN+"/img/user/nick-rybak.png"}
                        lastMessage={"Hi guys ! "}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Jane Cooper")}
                        name={"Jane Cooper"}
                        avatar={process.env.DOMAIN+"/img/user/jane-cooper.png"}
                        lastMessage={"Tellus hac duis ."}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Darrell Steward")}
                        name={"Darrell Steward"}
                        avatar={process.env.DOMAIN+"/img/user/darrell-steward.png"}
                        lastMessage={"Magna lorem nulla."}/>

                    <MessageCard
                        time={"13:50"}
                        onClick={() => alert("Darrell Steward")}
                        name={"Darrell Steward"}
                        avatar={process.env.DOMAIN+"/img/user/darrell-steward.png"}
                        lastMessage={"Magna lorem nulla."}/>

                </div>
            </div>
        </Card>
    )
}

export default MessagingCard;