import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import {useLocation, useParams} from 'react-router';
import Axios from 'axios';
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
    Slider,
    Container,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import ShoesCard from "../shoesListing/ShoesCard";
import axios from 'axios';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gridRowGap: "1rem",
        padding: "0.5rem",
    },
    rootMain:{
        marginBottom:"3rem",
    }
}));

export default function Recommended({f}) {

    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();

    const [shoes, setShoes] = useState([]);

    useEffect(async () => {
        const res = await Axios.get(`/recommended${f ? "Fast" : ""}/${user.id}`);
        setShoes(res.data);
    }, []);

    return <Container className={styles.rootMain}>
        <Paper>
            <Link to={"/recommended"}>
                <Button variant={"contained"} color={"primary"}>
                    Recommended based on recently viewed
                </Button>
            </Link>
            <Paper className={styles.root}>

                {shoes.map((shoe) => <ShoesCard shoe={shoe}/>)}
            </Paper>
        </Paper>
    </Container>

}