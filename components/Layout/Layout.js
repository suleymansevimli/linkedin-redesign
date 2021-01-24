import React from "react";
import Head from 'next/head'
import PropTypes from 'prop-types'
import style from "./layout.module.css"
import Header from "../cards/header/Header";


const Layout = ({menu, content, banner, message,title}) => {


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
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.topBar}>
                <Header/>
            </div>

            <div className={style.area}>
                {menu && <Menu/>}
                {content && <Content/>}
                {banner && <Banner/>}
                {message && <Message/>}
            </div>

        </div>
    )
}

export default Layout;

Layout.propTypes = {
    menu : PropTypes.oneOfType([PropTypes.func,PropTypes.node]),
    content : PropTypes.oneOfType([PropTypes.func,PropTypes.node]),
    banner : PropTypes.oneOfType([PropTypes.func,PropTypes.node]),
    message : PropTypes.oneOfType([PropTypes.func,PropTypes.node]),
    title: PropTypes.string.isRequired
}