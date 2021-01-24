import React from "react";
import style from './menu-card.module.css'
import Menu from "../../elements/menu/Menu";
import {Home, Job, Message, Network, Notification, Work} from "../../icons";
import Card from "../Card";
import {useRouter} from "next/router";

const MenuCard = () => {

    const router = useRouter();

    return (
        <Card classname={style.card}>
            <Menu className={style.item}
                  icon={<Home/>}
                  text={"Home"}
                  active={router.pathname === "/"}
                  onClick={() => router.push("/")}/>

            <Menu className={style.item}
                  icon={<Network/>} text={"Network"}
                  notify={"1"}
                  active={router.pathname === "/network"}
                  onClick={() => router.push("/network")}/>

            <Menu className={style.item}
                  icon={<Job/>} text={"Jobs"}
                  active={router.pathname === "/job"}
                  onClick={() => router.push("/")}/>

            <Menu className={style.item}
                  icon={<Message style={{fill: "#fff"}}/>}
                  text={"Messaging"}
                  active={router.pathname === "/messaging"}
                  onClick={() => router.push("/messaging")}/>

            <Menu className={style.item}
                  icon={<Notification/>}
                  text={"Notification"}
                  notify={"1"}
                  active={router.pathname === "/notification"}
                  onClick={() => router.push("/notification")}/>

            <Menu className={style.item}
                  icon={<Work/>} text={"Work"}
                  active={router.pathname === "/work"}
                  onClick={() => router.push("/")}/>

        </Card>
    )
}

export default MenuCard;