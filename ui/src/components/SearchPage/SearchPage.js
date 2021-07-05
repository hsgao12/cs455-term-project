import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchBarStyle.css";
import {useParams} from "react-router";
import {
    Button,
    Input,
    OutlinedInput,
    TextField,
    makeStyles,
    IconButton,
    Collapse,
    Box,
    Paper,
    Tooltip,
    Slider, Container
} from "@material-ui/core";
import SearchBar from "../searchBar/SearchBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid"
    },
    content: {
        display: "inline-grid",
        gridTemplateColumns: "auto auto"
    }
}));

const shoesFound = [
    {
        name: "wat",
        seller: {
            name: "namey",
            rating: 3.4
        },
        rating: 5,
        size: 12,
        img: "rawr",
        price: 500,
        sneakerID: "123712",
        brand: "nike",

    },
];

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [shoesList,setShoesList] = useState([]);

    const style = useStyles();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (<Container maxWidth={"xl"}>
        <SearchBar/>
        <div>
            <div>
                {/*search options*/}
            </div>

            <div>
                {/*actual results*/}
            </div>
        </div>
    </Container>);
}