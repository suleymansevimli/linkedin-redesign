import React from "react";
import PropTypes from 'prop-types'
import style from "./ads-card.module.css"
import Card from "../Card";

const AdsCard = () => {
    return (
        <Card classname={style.card}>
            <img src={"http://localhost:3000/img/logo/linkedin-logo.png"} alt=""/>
            <h3 className={"bold"}>See you at Linkedin</h3>
            <a className={"regular"} href="https://www.linkedin.com/in/suleymansevimli/">linkedin.com/in/suleymansevimli/</a>
        </Card>
    )
}

export default AdsCard;
