import React from "react";
import PropTypes from 'prop-types'
import style from "./layout.module.css"
import Header from "../cards/header/Header";


const Layout = ({menu, content, banner, message}) => {


    const Menu = () => {
        return (
            <div className={style.menu}>
                {menu}
            </div>
        )
    }

    const Content = () => {
        return (
            <div className={style.content}>
                {content}
            </div>
        )
    }

    const Message = () => {
        return (
            <div className={style.message}>
                {message}
            </div>
        )
    }

    const Banner = () => {
        return (
            <div className={style.banner}>
                {banner}
            </div>
        )
    }


    return (
        <div className={style.layout}>

            <div className={style.topBar}>
                <Header/>
            </div>

            <div className={style.area}>
                <Menu/>
                <Content/>
                <Banner/>
                <Message/>
            </div>

        </div>
    )
}

export default Layout;