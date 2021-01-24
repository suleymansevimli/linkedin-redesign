import React from "react";
import PropTypes from 'prop-types'
import style from "./header.module.css"
import Card from "../Card";
import AccountDropdown from "../../elements/dropdown/AccountDropdown";
import Search from "../../elements/search/Search";
import {useRouter} from "next/router";

const Header = () => {

    const router = useRouter()

    return (
        <Card classname={style.card}>
            <div className={style.header}>

                <div className={style.logo}>
                    <img src={process.env.DOMAIN+"/img/logo/linkedin-logo.png"} alt="" onClick={()=>router.push("/")}/>
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