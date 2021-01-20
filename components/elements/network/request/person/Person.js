import React from "react";
import PropTypes from 'prop-types'
import style from "./person.module.css"
import cn from "classnames";
import {Connection} from "../../../../icons";
import Link from "next/link";

const Person = ({user,connections,onAccept,onIgnore}) => {
    return (
        <div className={style.request}>
            <div className={style.person}>
                <img src={user.avatar} alt=""/>
                <div className={style.information}>
                    <p className={cn(["medium",style.name])}>{user.name}</p>
                    <p className={cn(["regular",style.job])}>{user.job}</p>
                    <p className={cn(["light",style.connections])}><Connection/> {connections}</p>
                </div>
            </div>

            <div className={style.actions}>
                <p onClick={()=>onIgnore()} className={cn(["regular",style.ignore])}>Ignore</p>
                <p onClick={()=>onAccept()} className={cn(["regular",style.accept])}>Accept</p>
            </div>
        </div>
    )
}

export default Person;

Person.propTypes = {
    user: PropTypes.object.isRequired,
    connections : PropTypes.string,
    onAccept: PropTypes.func.isRequired,
    onIgnore: PropTypes.func.isRequired
}