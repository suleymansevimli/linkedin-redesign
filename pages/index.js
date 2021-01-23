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
        user : {
            cover: "http://localhost:3000/img/cover.svg",
            avatar: "http://localhost:3000/img/user/nick-rybak.png"
        },
        statics : {
            viewedProfile : "205",
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

  return (
    <Layout>
        <div className={style.menu}>
            <MenuCard/>
            <div className={style.account}>
                <AccountCard {...account}/>
            </div>
        </div>
        <div className={style.content}>
            <NewPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        <div className={style.banner}>
            <AddCard/>
            <div className={style.ads}>
                <AdsCard {...ads[1]}/>
                <AdsCard {...ads[0]}/>
            </div>
        </div>
        <div className={style.message}>
            <MessagingCard/>
        </div>
    </Layout>
  )
}
