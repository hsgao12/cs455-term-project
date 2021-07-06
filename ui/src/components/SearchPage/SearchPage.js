import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
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
import ShoeCardBig from "./ShoeCardBig";
import DetailedInfoView from "./DetailedInfoView";
import DenseView from "./DenseView"

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

const shoesFound = [
    {
        name: "wat",
        seller: {
            name: "namey",
            rating: 3.4
        },
        rating: 5,
        size: 12,
        img: "/shoes-images/Adidas-Yeezy360-zyon.webp",
        price: 500,
        sneakerID: "123712",
        brand: "nike",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    }, {
        name: "watsadasdasdasdasdasdasdasdasdasdas",
        seller: {
            name: "first_name last_name",
            rating: 3.4
        },
        rating: 5,
        size: 12,
        img: "/shoes-images/Adidas-Yeezy360-zyon.webp",
        price: 500,
        sneakerID: "123712",
        brand: "nike",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    }, {
        name: "wat",
        seller: {
            name: "namey",
            rating: 3.4
        },
        rating: 5,
        size: 12,
        img: "/shoes-images/Adidas-Yeezy360-zyon.webp",
        price: 500,
        sneakerID: "123712",
        brand: "nike",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
    },
];


export default function SearchPage() {
    const searchTerm = "";
    const [shoesList, setShoesList] = useState(shoesFound);

    const styles = useStyles();
    const view = "detailed";


    return (<Container maxWidth={"xl"}>
        <div style={{position: "relative"}}>
            <div style={{visibility: "hidden"}}>
                <SearchBar init={"wat"}/>
            </div>
            {/*lol*/}
            <div style={{position: "absolute", top: "0", width: "100%"}}>
                <SearchBar init={"wat"}/>
            </div>
        </div>
        <div className={styles.content}>
            <div>
                {/*search options*/}
                <Button>button1</Button>
                <Input></Input>
            </div>
            <div>
                {view === "detailed" && <DetailedInfoView shoes={shoesList}/>}
                {view === "dense" && <DenseView shoes={shoesList}/>}
            </div>
        </div>
    </Container>);
}