import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
    Card,
    IconButton,
    Input,
    makeStyles,
    OutlinedInput, Paper,
    TextareaAutosize,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import {Label} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import BuyCard from './BuyCard';
import {List} from '@material-ui/core';
import axios from "axios";
import GenericCard from "./GenericCard";


const useStyles = makeStyles((theme) => ({
    root: {
        marginRight:"1rem",
        paddingLeft:"1rem"
    },
    container: {
        display: 'grid',
        gridRowGap: '1rem',
        maxHeight: '100%',
    },
}));

export default function BuyHistory(props) {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();

    const [boughtShoes, setBoughtShoes] = useState([]);

    useEffect(async () => {
        setBoughtShoes((await axios.get(`buyHistory/${user.id}`)).data);
    }, []);

    return (
        <React.Fragment>
            <Paper className={styles.root}>
                <List className={styles.container}>
                    {boughtShoes.map((e) => (
                        <GenericCard item={e}/>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
}
