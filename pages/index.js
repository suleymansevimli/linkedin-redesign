import style from "../styles/Home.module.css";
import MenuCard from "../components/cards/menu/MenuCard";
import NetworkCard from "../components/cards/network/NetworkMenu";
import NewPost from "../components/cards/post/new/NewPost";
import Post from "../components/cards/post/Post";
import AddCard from "../components/cards/add/AddCard";
import AdsCard from "../components/cards/advertisement/AdsCard";
import MessagingCard from "../components/cards/messaging/MessagingCard";
import React from "react";
import Layout from "../components/Layout/Layout";

export default function Home() {

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
            <NetworkCard/>
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
