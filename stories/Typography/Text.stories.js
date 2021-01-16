import React from "react";
import Text from "../../components/Typography/Text";

export default {
    title: "Components/Typography",
    component: Text
}

export const Typography = () => {
    return (
        <div>
            <Text tag={"h1"} size={38} className={"bold"} style={{textDecoration:"underline"}}>Typography</Text>

            <Text tag={"p"} className={"bold"} size={20}> Linkedin Redesign </Text>
            <Text tag={"p"} className={"semi-bold"} size={20}> Linkedin Redesign </Text>
            <Text tag={"p"} className={"medium"} size={20}> Linkedin Redesign </Text>
            <Text tag={"p"} className={"regular"} size={20}> Linkedin Redesign </Text>
            <Text tag={"p"} className={"light"} size={20}> Linkedin Redesign </Text>
        </div>
    )
}

