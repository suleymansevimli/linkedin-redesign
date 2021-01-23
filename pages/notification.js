import React from "react";
import Layout from "../components/Layout/Layout";
import MenuCard from "../components/cards/menu/MenuCard";
import AdsCard from "../components/cards/advertisement/AdsCard";
import MessagingCard from "../components/cards/messaging/MessagingCard";
import NotificationCard from "../components/cards/notification/Notification";
import style from '../styles/Notification.module.css'

const Notification = () => {

    const ads = [
        {
            logo: "/img/logo/linkedin-logo.png",
            title: "See you at Linkedin",
            link: {
                url: "https://www.linkedin.com/in/suleymansevimli/",
                label: "linkedin.com/in/suleymansevimli"
            }
        },

        {
            logo: "/img/logo/github.png",
            title: "Github Repository",
            link: {
                url: "https://github.com/suleymansevimli/linkedin-redesign",
                label: "github.com/suleymansevimli"
            }
        },
        {
            logo: "/img/logo/twitter.png",
            title: "Follow on Twitter",
            link: {
                url: "https://twitter.com/SevimliSleyman",
                label: "twitter.com/SevimliSleyman"
            }
        }
    ]

    const notifications = [
        {
            user: {
                avatar: "http://localhost:3000/img/user/jane-cooper.png",
                name: "Jane Cooper"
            },
            action: "liked your post",
            time: "55m ago",
            postContent: {
                text: "Id malesuada cursus felis, neque. Eu ullamcorper lorem lacus aenean sit. Fringilla purus ornare at orci mauris, et dictum. Risus nulla consectetur mollis eget amet. Sollicitudin vel aliquet pellentesque dolor nunc sit tellus. Sit nunc id maecenas tellus interdum mauris enim. Dui lobortis tellus, tincidunt in non aliquam integer maecenas nullam.",
            },
            footer: "LinkedIn redesign concept",
            reactions: {
                reaction: "27",
                comment: "11"
            }

        },
        {
            user: {
                avatar: "http://localhost:3000/img/user/jane-cooper.png",
                name: "Jane Cooper"
            },
            action: "liked your post",
            time: "55m ago",
            postContent: {
                text: "Id malesuada cursus felis, neque. Eu ullamcorper lorem lacus aenean sit. Fringilla purus ornare at orci mauris, et dictum. Risus nulla consectetur mollis eget amet. Sollicitudin vel aliquet pellentesque dolor nunc sit tellus. Sit nunc id maecenas tellus interdum mauris enim. Dui lobortis tellus, tincidunt in non aliquam integer maecenas nullam.",
            },
            footer: "LinkedIn redesign concept",
            reactions: {
                reaction: "27",
                comment: "11"
            }

        }
    ]

    const Menu = () => {
        return (
            <>
                <MenuCard/>
                <br/>
                <AdsCard {...ads[2]}/>
            </>
        )
    }

    const Content = () => {
        return (
            <div className={style.notificationContent}>
                <NotificationCard {...notifications[0]} />
                <NotificationCard {...notifications[1]} />
            </div>
        )
    }

    const Banner = () => {
        return (
            <>
                <AdsCard {...ads[0]}/>
                <AdsCard {...ads[1]}/>
            </>
        )
    }

    const Message = () => {
        return (
            <MessagingCard/>
        )
    }


    return (
        <Layout message={<Message/>} menu={<Menu/>} banner={<Banner/>} content={<Content/>}/>
    )
}

export default Notification;