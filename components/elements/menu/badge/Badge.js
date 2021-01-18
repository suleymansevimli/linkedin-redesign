import React from "react";
import PropTypes from 'prop-types'
import style from "./badge.module.css"

const Badge = ({children}) => {
    return (
        <div className={style.badge}>
            <p className={"bold"}>
                {children}
            </p>
        </div>
    )
}

export default Badge;

Badge.propTypes = {
    children: PropTypes.string.isRequired
}

