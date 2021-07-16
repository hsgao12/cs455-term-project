import React, {useEffect, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import {useLocation, useParams} from "react-router";
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
    Slider, Container, useMediaQuery, useTheme
} from "@material-ui/core";
import SearchBar from "../searchBar/SearchBar";
import ShoeCardBig from "./ShoeCardBig";
import DetailedInfoView from "./DetailedInfoView";
import DenseView from "./DenseView"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",

    },
    content: {
        display: "inline-grid",
        gridTemplateColumns: "auto auto"
    },
    shoesContentVertical: {
        display: "grid"
    }
}));

export default function SearchPage() {
    const params = new URLSearchParams(useLocation().search);
    const theme = useTheme();
    const [shoesList, setShoesList] = useState([]);
    const [wat,setWat] = useState(false);

    const forceReload = ()=>setWat(!wat);

    const searchTerm = params.get("query") ?? "";
    const [minPrice, maxPrice, minSize, maxSize, brandsString] = params.getAll("minPrice", "maxPrice", "minSize", "maxSize", "brands");
    //const brands = JSON.parse(brandsString);

    const styles = useStyles();
    const view = "detailed";

    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(async ()=>{
        const data = (await axios.get(`http://localhost:3000/search/${searchTerm}`)).data;
        console.log(data);
        setShoesList(data);
    },[wat]);

    return (<Container maxWidth={"xl"}>
        <div style={{position: "relative", marginBottom: "1em"}}>
            <div style={{visibility: "hidden"}}>
                <SearchBar init={searchTerm}/>
            </div>
            {/*lol*/}
            <div style={{position: "absolute", top: "0", width: "100%"}}>
                <SearchBar init={searchTerm} buttonClick={()=>setWat(!wat)}/>
            </div>
        </div>
        <div className={styles.content}>
            <div style={{display: "grid"}}>
                {/*search options*/}
                <div>
                    <Button>button1</Button>
                </div>
                <div>
                    <Input placeholder={"put stuff here"}></Input>
                </div>
            </div>
            <div>
                {view === "detailed" && <DetailedInfoView shoes={shoesList}/>}
                {view === "dense" && <DenseView shoes={shoesList}/>}
            </div>
        </div>
    </Container>);
}