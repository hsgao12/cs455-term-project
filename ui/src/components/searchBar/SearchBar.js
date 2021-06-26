import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBarStyle.css";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    return (<div className="searchBackground">
        <div className="searchWrapper">
            <input type="text" className="searchInput" placeholder="What are you looking for?"
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchIcon className="searchBtn"></SearchIcon>
        </div>
    </div>)
}