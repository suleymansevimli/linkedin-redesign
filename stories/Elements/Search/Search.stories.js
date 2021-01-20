import React from "react";
import SearchComp from "../../../components/elements/search/Search";

export default {
    title: "Components/search",
    component: SearchComp
}

export const Search = (args) => {
    return <SearchComp {...args} />
}

Search.args = {
    placeholder: "search..."
}
