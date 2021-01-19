import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types'
import style from "./card.module.css"

const Card = ({children,classname}) => {
    return (
        <div className={cn([classname ? classname : "",style.container])}>
            {children}
        </div>
    )
}

export default Card;

Card.propTypes = {
    children: PropTypes.node.isRequired
}