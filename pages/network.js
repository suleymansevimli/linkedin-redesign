import React from "react";
import style from "../styles/Home.module.css";
import MenuCard from "../components/cards/menu/MenuCard";
import NewPost from "../components/cards/post/new/NewPost";
import Post from "../components/cards/post/Post";
import AddCard from "../components/cards/add/AddCard";
import AdsCard from "../components/cards/advertisement/AdsCard";
import MessagingCard from "../components/cards/messaging/MessagingCard";
import Layout from "../components/Layout/Layout";
import AccountCard from "../components/cards/account/AccountCard";
import RequestCard from "../components/cards/network/request/RequestCard";
import SuggestionCard from "../components/cards/suggestion/SuggestionCard";
import NetworkCard from "../components/cards/network/NetworkMenu";

export default function Network() {

    const account = {
        user: {
            cover: "http://localhost:3000/img/cover.svg",
            avatar: "http://localhost:3000/img/user/nick-rybak.png"
        },
        statics: {
            viewedProfile: "205",
            viewedLastPost: "9,767"
        }
    }

    const ads = [
        {
            logo: "/img/logo/linkedin-logo.png",
            title: "See you at Linkedin",
            link: {
                url: "https://www.linkedin.com/in/suleymansevimli/",
                label: "linkedin.com/in/suleymansevimli"
            }
        },

        {
            logo: "/img/logo/github.png",
            title: "Github Repository",
            link: {
                url: "https://github.com/suleymansevimli/linkedin-redesign",
                label: "github.com/suleymansevimli"
            }
        }
    ]

    const Menu = () => {
        return (
            <>
                <MenuCard/>
                <NetworkCard/>
            </>
        )
    }

    const Content = () => {
        return (
            <>
                <RequestCard/>
                <SuggestionCard/>
            </>
        )
    }

    const Banner = () => {
        return (
            <>
                <div className={style.ads}>
                    <AdsCard {...ads[0]}/>
                    <AdsCard {...ads[1]}/>
                </div>
            </>
        )
    }

    const Message = () => {
        return (
            <MessagingCard/>
        )
    }

    return (
        <Layout message={<Message/>} menu={<Menu/>} banner={<Banner/>} content={<Content/>}/>
    )
}
