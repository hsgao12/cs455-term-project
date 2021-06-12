import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBarStyle.css";

export default function SearchBar() {

    return (<div className="searchBackground">
        <div className="searchWrapper">
        <input type="text" className = "searchInput" placeholder= "What are you looking for?"/>
        <SearchIcon className="searchBtn"></SearchIcon>
        </div>
    </div>)
}