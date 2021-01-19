import React from "react";
import PropTypes from 'prop-types'
import style from "./search.module.css"
import SearchIcon from '../../icons/Search'

const Search = ({placeholder}) => {
    return (
        <div className={style.search}>
            <input type="text" placeholder={placeholder}/>
            <SearchIcon/>
        </div>
    )
}

export default Search;

Search.propTypes = {
    placeholder: PropTypes.string
}