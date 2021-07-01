import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBarStyle.css";
import {Button, Input, OutlinedInput, TextField, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    searchInput: {
        background: theme.palette.background.default,
        height: "3rem"
    },
    searchWrapper: {
        display: "grid",
        gridTemplateColumns: "auto 64px",
        maxWidth: "550px",
        background: "rgba(0,0,0,0.6)",
        gridColumnGap: "0.3rem",
        padding: "15px",
        borderRadius: "5px",
        margin: "0 auto",

    },
    searchButton: {
        background: theme.palette.search.main,
        '&:hover': {
            background: theme.palette.search.dark
        },
    }
}));

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const style = useStyles();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (<div className="searchBackground">
        <div className={style.searchWrapper}>
            <OutlinedInput
                placeholder="What are you looking for?"
                fullWidth={true}
                color={"primary"}
                className={style.searchInput}
                onChange={handleInputChange}
            />
            <Button className={style.searchButton}>
                <SearchIcon/>
            </Button>
        </div>
    </div>);

    return (<div className="searchBackground">
        <div className="searchWrapper">
            <input type="text" className="searchInput" placeholder="What are you looking for?"
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchIcon className="searchBtn"></SearchIcon>
        </div>
    </div>)
}