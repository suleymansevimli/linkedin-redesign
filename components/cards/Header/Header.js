import React from "react";
import PropTypes from 'prop-types'
import style from "./header.module.css"
import Card from "../Card";
import {ArrowDown} from "../../icons";
import AccountDropdown from "../../elements/dropdown/AccountDropdown";
import Search from "../../elements/search/Search";

const Header = () => {

    return (
        <Card classname={style.card}>
            <div className={style.header}>

                <div className={style.logo}>
                    <img src={"http://localhost:3000/img/logo/linkedin-logo.png"} alt=""/>
                </div>

                <div className={style.search}>
                    <Search placeholder={"Global search "}/>
                </div>

                <div className={style.account}>
                    <AccountDropdown/>
                </div>

            </div>
        </Card>
    )
}

export default Header;