import React from "react";
import PropTypes from 'prop-types'
import style from "./layout.module.css"
import MenuCard from "../cards/menu/MenuCard";
import NewPost from "../cards/post/new/NewPost";
import Header from "../cards/header/Header";
import Post from "../cards/post/Post";
import NetworkCard from "../cards/network/NetworkMenu";
import AddCard from "../cards/add/AddCard";
import MessagingCard from "../cards/messaging/MessagingCard";
import AdsCard from "../cards/advertisement/AdsCard";

const Layout = () => {
    return (
        <div className={style.layout}>

            <div className={style.topBar}>
                <Header/>
            </div>

            <div className={style.area}>
                <div className={style.menu}>
                    <MenuCard/>
                    <NetworkCard/>
                </div>
                <div className={style.content}>
                    <NewPost/>
                    <Post/>
                    <Post/>
                </div>
                <div className={style.banner}>
                   <AddCard/>
                   <AdsCard/>
                </div>
                <div className={style.message}>
                    <MessagingCard/>
                </div>
            </div>

        </div>
    )
}

export default Layout;