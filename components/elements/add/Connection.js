import React from "react";
import PropTypes from 'prop-types'
import style from "./connection.module.css"
import cn from "classnames";
import {Plus} from "../../icons";

const Connection = ({logo,name,sector,action}) => {
    return (
        <div className={style.connection}>
            <img src={logo} alt=""/>
            <div className={style.info}>
                <p className={cn([style.name, "medium"])}>{name}</p>
                <p className={cn([style.sector, "light"])}>{sector}</p>
            </div>
            <div className={style.plus} onClick={()=>action()}>
                <Plus/>
            </div>
        </div>
    )
}

export default Connection;

Connection.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    sector: PropTypes.string,
    action: PropTypes.func
}

