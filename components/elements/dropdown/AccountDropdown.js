import React from "react";
import PropTypes from 'prop-types'
import style from "./account-dropdown.module.css"
import {ArrowDown} from "../../icons";

const AccountDropdown = () => {

    const [showOptions, setShow] = React.useState(false)

    return (
        <div className={style.accountDropdown}>
            <div className={style.label} onClick={() => setShow(!showOptions)}>
                <img src={process.env.DOMAIN+"/img/user/nick-rybak.png"} alt={"Nick Rybak"}/>
                <p className={"regular"}>Nick Rybak</p>
                <ArrowDown/>
            </div>

            {showOptions && <div className={style.options}>
                <ul>
                    <li>Profile</li>
                    <li>Log Out</li>
                </ul>
            </div>}

        </div>
    )
}

export default AccountDropdown;