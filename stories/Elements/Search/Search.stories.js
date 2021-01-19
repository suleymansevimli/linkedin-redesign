import React from "react";
import SearchComp from "../../../components/elements/Search/Search";

export default {
    title: "Components/Search",
    component: SearchComp
}

export const Search = (args) => {
    return <SearchComp {...args} />
}

Search.args = {
    placeholder: "Search..."
}
