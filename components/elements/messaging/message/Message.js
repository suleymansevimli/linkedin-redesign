import React from "react";
import PropTypes from 'prop-types'
import style from "./message.module.css"

const Message = ({}) => {

    return (
        <div className={style.container}>

            <div className={style.forMe}>
                <div className={style.avatar}>
                    <img src={"http://localhost:3000/img/user/nick-rybak.png"} alt=""/>
                </div>
                <div className={style.message}>
                    <div className={style.content}>
                        <p className={"regular"}>Duis proin eu sagittis fermentum eget pharetra libero augue dui.
                            Suscipit volutpat fames tincidunt.</p>
                    </div>
                    <div className={style.dateTime}>
                        <p className={"regular"}>5:10 AM</p>
                    </div>
                </div>
            </div>

            <div className={style.fromMe}>
                <div className={style.message}>
                    <div className={style.content}>
                        <p className={"regular"}>Duis proin eu sagittis fermentum eget pharetra libero augue dui.
                            Suscipit volutpat fames tincidunt.</p>
                    </div>
                    <div className={style.dateTime}>
                        <p className={"regular"}>5:10 AM</p>
                    </div>
                </div>
                <div className={style.avatar}>
                    <img src={"http://localhost:3000/img/user/jane-cooper.png"} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Message;