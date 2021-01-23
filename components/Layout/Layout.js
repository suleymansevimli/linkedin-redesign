import React from "react";
import PropTypes from 'prop-types'
import style from "./layout.module.css"
import Header from "../cards/header/Header";

const Layout = ({children}) => {



    return (
        <div className={style.layout}>

            <div className={style.topBar}>
                <Header/>
            </div>

            <div className={style.area}>
                {children}
            </div>

        </div>
    )
}

export default Layout;