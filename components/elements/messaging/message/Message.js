import React from "react";
import PropTypes from 'prop-types'
import style from "./message.module.css"

const Message = ({type, user, content,time}) => {

    const Render = () => {
        switch (type) {
            case "forMe" :
                return (
                    <div className={style.forMe}>
                        <div className={style.avatar}>
                            <img src={user.avatar} alt=""/>
                        </div>
                        <div className={style.message}>
                            <div className={style.content}>
                                <p className={"regular"}>{content}</p>
                            </div>
                            <div className={style.dateTime}>
                                <p className={"regular"}>{time}</p>
                            </div>
                        </div>
                    </div>
                )
            default :
                return (
                    <div className={style.fromMe}>
                        <div className={style.message}>
                            <div className={style.content}>
                                <p className={"regular"}>
                                    {content}
                                </p>
                            </div>
                            <div className={style.dateTime}>
                                <p className={"regular"}>{time}</p>
                            </div>
                        </div>
                        <div className={style.avatar}>
                            <img src={user.avatar} alt=""/>
                        </div>
                    </div>
                )
        }
    }


    return (
        <div className={style.container}>
            <Render/>
        </div>
    )
}

export default Message;

Message.propTypes = {
    type: PropTypes.oneOf(["fromMe", "forMe"]),
    user: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    time: PropTypes.string.isRequired
}