import React from "react";
import PropTypes from 'prop-types'
import style from "./ads-card.module.css"
import Card from "../Card";

const AdsCard = ({logo,title,link}) => {
    return (
        <Card classname={style.card}>
            <img src={logo} alt=""/>
            <h3 className={"bold"}>{title}</h3>
            <a target={"_blank"} className={"regular"} href={link.url}>{link.label}</a>
        </Card>
    )
}

export default AdsCard;

AdsCard.propTypes = {
    logo : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link : PropTypes.object.isRequired
}
