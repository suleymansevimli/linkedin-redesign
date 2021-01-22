import React from "react";
import PropTypes from 'prop-types'
import cn from 'classnames';
import style from "./notification.module.css"
import Card from "../Card";
import {Options} from "../../icons";

const NotificationCard = ({user, action, time, postContent, footer, reactions}) => {
    return (
        <Card classname={style.card}>
            <div className={style.notification}>
                <div className={style.header}>
                    <div className={style.user}>
                        <img src={user.avatar} alt={user.name}/>
                        <span className={cn(["regular", style.name])}>{user.name}</span>
                        <span className={cn(["semi-bold", style.action])}>{action}</span>
                        <span className={cn(["regular", style.time])}>{time}</span>
                    </div>
                    <div className={style.options}>
                        <Options/>
                    </div>
                </div>

                <div className={style.post}>
                    <p className={cn(["regular", style.postText])}>
                        {postContent.text}
                    </p>
                </div>

                <div className={style.footer}>
                    <p className={cn(["regular", style.footerText])}>{footer}</p>
                </div>

                <div className={style.reactions}>
                    <div><p className={"regular"}> {reactions.reaction} Reactions </p></div>
                    <div className={style.dot}/>
                    <div><p className={"regular"}> {reactions.comment} Comment </p></div>
                </div>

            </div>
        </Card>
    )
}

export default NotificationCard;

NotificationCard.propTypes = {
    user: PropTypes.object,
    action: PropTypes.string,
    postContent: PropTypes.oneOf(["object", "node"]),
    footer: PropTypes.oneOf(["string", "node"]),
    reactions: PropTypes.object,
}