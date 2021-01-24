import React from "react";
import Layout from "../components/Layout/Layout";
import MenuCard from "../components/cards/menu/MenuCard";
import AdsCard from "../components/cards/advertisement/AdsCard";
import style from '../styles/Messaging.module.css'
import MessagingCard from "../components/cards/messaging/MessagingCard";
import {Options} from "../components/icons";
import Write from "../components/elements/messaging/message/Write";
import MessageCard from "../components/elements/messaging/card/MessageCard";
import Message from "../components/elements/messaging/message/Message";

const Messaging = () => {

    const ads = [
        {
            logo: "/img/logo/github.png",
            title: "Github Repository",
            link: {
                url: "https://github.com/suleymansevimli/linkedin-redesign",
                label: "github.com/suleymansevimli"
            }
        }
    ]

    const messages = [
        {
            type: "fromMe",
            user: {
                avatar: "http://localhost:3000/img/user/nick-rybak.png"
            },
            content: "Duis proin eu sagittis fermentum eget pharetra libero augue dui. Suscipit volutpat fames tincidunt.",
            time: "5:10 AM"
        },
        {
            type: "forMe",
            user: {
                avatar: "http://localhost:3000/img/user/jane-cooper.png"
            },
            content: "Duis proin eu sagittis fermentum eget pharetra libero augue dui. Suscipit volutpat fames tincidunt.",
            time: "5:10 AM"
        }
    ]

    const Menu = () => {
        return (
            <div>
                <MenuCard/>
                <AdsCard {...ads[0]}/>
            </div>
        )
    }

    const Content = () => {
        return (
            <div className={style.content}>
                <div className={style.messageCard}>
                    <MessagingCard className={style.card}/>
                </div>
                <div className={style.chat}>
                    <div className={style.header}>
                        <div className={style.information}>
                            <img src={"/img/user/nick-rybak.png"} alt="Nick Rybak"/>
                            <div className={style.nameAndJob}>
                                <div className={style.name}>
                                    <h4 className={"semi-bold"}>Nick Rybak</h4>
                                    <span className={"regular"}>55m ago</span>
                                    <div className={style.dot}/>
                                    <span className={"regular"}>Mobile</span>
                                </div>
                                <div className={style.job}>
                                    <span className={"regular"}>UI/UX designer - Appsrvice agency</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.options}>
                            <Options/>
                        </div>
                    </div>
                    <div className={style.messagesArea}>
                        <div className={style.write}>
                            <Write/>
                        </div>
                        <div className={style.messages}>
                            <Message {...messages[0]}/>
                            <Message {...messages[1]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Layout menu={<Menu/>} content={<Content/>}/>
    )
}

export default Messaging;