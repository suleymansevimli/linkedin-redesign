import React from "react";
import cn from 'classnames';
import style from "./menu.module.css"
import PropTypes from 'prop-types';
import Badge from "./badge/Badge";

const Menu = ({icon, text, notify, active,className,onClick}) => {
    return (
        <div onClick={()=>onClick()} className={cn([style.container, active ? style.active : "",className ? className :""])}>
            <div className={style.icon}>
                {icon}
                {notify && <div className={style.badge}>
                    <Badge children={notify}/>
                </div>}
            </div>
            <div className={style.text}><p className={"regular"}> {text} </p></div>
        </div>
    )
}

export default Menu;

Menu.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}