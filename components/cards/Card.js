import React from "react";
import PropTypes from 'prop-types'
import style from "./card.module.css"

const Card = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Card;

Card.propTypes = {
    children: PropTypes.node.isRequired
}