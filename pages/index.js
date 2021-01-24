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

export default function Home() {

    const account = {
        user: {
            cover: process.env.DOMAIN+"/img/cover.svg",
            avatar: process.env.DOMAIN+"/img/user/nick-rybak.png"
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
                <div className={style.account}>
                    <AccountCard {...account}/>
                </div>
            </>
        )
    }

    const Content = () => {
        return (
            <>
                <NewPost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </>
        )
    }

    const Banner = () => {
        return (
            <>
                <AddCard/>
                <div className={style.ads}>
                    <AdsCard {...ads[1]}/>
                    <AdsCard {...ads[0]}/>
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
        <Layout title={"A new look for Linkedin !"} message={<Message/>} menu={<Menu/>} banner={<Banner/>} content={<Content/>}/>
    )
}
