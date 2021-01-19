import React from "react";
import PropTypes from 'prop-types'
import style from "./message.module.css"
import cn from "classnames";

const Message = ({avatar, name, lastMessage, onClick}) => {
    return (
        <div className={style.message} onClick={() => onClick()}>
            <img src={avatar} alt=""/>
            <div className={style.information}>
                <p className={cn([style.name, "medium"])}>{name}</p>
                <p className={cn([style.lastMessage, "light"])}>{lastMessage}</p>
            </div>
        </div>
    )
}

export default Message;

Message.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    onClick: PropTypes.func.isRequired
}