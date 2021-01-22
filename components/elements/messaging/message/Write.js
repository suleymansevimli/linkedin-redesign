import React from "react";
import PropTypes from 'prop-types'
import style from "./write.module.css"
import Card from "../../../cards/Card";
import {ArrowUp, Attach, Emoji, Gif, Image, Options} from "../../../icons";

const Write = () => {
    return (
        <Card classname={style.card}>
            <div className={style.write}>
                <input type="text" className={style.input} placeholder={"Write a message..."}/>
                <div className={style.actions}>
                    <Image/>
                    <Attach/>
                    <Gif/>
                    <Emoji/>
                    <Options/>
                    <ArrowUp/>
                </div>
                <div className={style.button}>
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </Card>
    )
}

export default Write ;