import React from "react";
import MenuCard from "../components/cards/menu/MenuCard";
import AdsCard from "../components/cards/advertisement/AdsCard";
import MessagingCard from "../components/cards/messaging/MessagingCard";
import Layout from "../components/Layout/Layout";
import RequestCard from "../components/cards/network/request/RequestCard";
import SuggestionCard from "../components/cards/suggestion/SuggestionCard";
import NetworkCard from "../components/cards/network/NetworkMenu";

export default function Network() {

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
        }
    ]

    const Menu = () => {
        return (
            <>
                <MenuCard/>
                <NetworkCard/>
            </>
        )
    }

    const Content = () => {
        return (
            <>
                <RequestCard/>
                <SuggestionCard/>
            </>
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
