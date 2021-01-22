import React from "react";
import PropTypes from 'prop-types'
import style from "./message.module.css"
import cn from "classnames";

const MessageCard = ({avatar, name, lastMessage, onClick, time}) => {
    return (
        <div className={style.message} onClick={() => onClick()}>
            <img src={avatar} alt=""/>
            <div className={style.information}>
                <div className={style.header}>
                    <p className={cn([style.name, "medium"])}>{name}</p>
                    <p className={cn([style.time, "light"])}>{time?? "13:50"}</p>
                </div>
                <p className={cn([style.lastMessage, "light"])}>{lastMessage}</p>
            </div>
        </div>
    )
}

export default MessageCard;

MessageCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired
}