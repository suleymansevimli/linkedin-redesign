import React from "react";
import PropTypes from 'prop-types'
import style from "./suggestion-card.module.css"
import Card from "../../Card";
import {Close, Connection} from "../../../icons";

const SuggestionCard = ({user, onAccept, onDecline, connections}) => {
    return (
        <Card classname={style.card}>
            <div className={style.suggestionCard}>
                <div className={style.userInformation}>
                    <div className={style.cover}>
                        <img src={user.cover} alt=""/>
                        <div className={style.avatar}>
                            <img src={user.avatar} alt=""/>
                        </div>
                        <div className={style.decline} onClick={()=>onDecline()}>
                            <Close/>
                        </div>
                    </div>

                    <div className={style.text}>
                        <h3 className={"medium"}>{user.name}</h3>
                        <p className={"regular"}>{user.job}</p>
                    </div>

                    <div className={style.connections}>
                        <Connection/>
                        <span className={"light"}>{connections}</span>
                    </div>
                </div>

                <div className={style.accept}>
                    <p className={"medium"} onClick={()=>onAccept()}>Accept</p>
                </div>
            </div>
        </Card>
    )
}

export default SuggestionCard;

SuggestionCard.propTypes = {
    user: PropTypes.object,
    onAccept: PropTypes.func.isRequired,
    onDecline: PropTypes.func.isRequired,
    connections: PropTypes.oneOfType([PropTypes.string,PropTypes.node])
}