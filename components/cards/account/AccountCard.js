import React from "react";
import PropTypes from 'prop-types'
import cn from "classnames"
import style from "./account-card.module.css"
import Card from "../Card";

const AccountCard = ({user,statics}) => {
    return (
        <Card>
            <div className={style.accountCard}>

                <div className={style.userInformation}>
                    <div className={style.cover}>
                        <img src={user.cover} alt=""/>
                        <div className={style.avatar}>
                            <img src={user.avatar} alt=""/>
                        </div>
                    </div>

                    <div className={style.text}>
                        <h3 className={"semi-bold"}>Nick Rybak</h3>
                        <p className={"regular"}>UX/UI designer - Appservice Agency</p>
                    </div>
                </div>

                <div className={style.statics}>
                    <div className={style.staticsContent}>
                        <p className={cn([style.title, "light"])}>Who viewed your profile</p>
                        <p className={cn([style.count, "regular"])}>{statics.viewedProfile}</p>
                    </div>

                    <div className={style.staticsContent}>
                        <p className={cn([style.title, "light"])}>Views of your post</p>
                        <p className={cn([style.count, "regular"])}>{statics.viewedLastPost}</p>
                    </div>
                </div>

            </div>
        </Card>
    )
}

export default AccountCard;

AccountCard.propTypes = {
    user: PropTypes.object.isRequired,
    statics: PropTypes.object.isRequired
}