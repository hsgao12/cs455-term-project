import {useSelector} from "react-redux";
import React, {useState} from "react";
import {
    Card,
    IconButton,
    Input,
    makeStyles,
    OutlinedInput,
    TextareaAutosize,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from "@material-ui/core";
import {Label} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import BuyCard from "./BuyCard"


const shoesBought = [
    {
        name: "Adidas-Yeezy360-zyon",
        image: "/shoes-images/Adidas-Yeezy360-zyon.webp",
        price: 500,
        sellerName: "potato",
        sellerID: "1233556",
        dateBought: "21/5/27",
        orderID: "23231",
        rating: 3.4

    },
    {
        name: "Adidas-Yeezy360-zyon",
        image: "/shoes-images/Adidas-Yeezy360-zyon.webp",
        price: 500,
        sellerName: "potato",
        sellerID: "1233556",
        dateBought: "21/5/27",
        orderID: "23231",
        rating: 3.4

    }
];


const useStyles = makeStyles((theme) => ({
    root:{
        display:"grid",
        gridRowGap:"1rem",

    }
}));

export default function BuyHistory(props) {
    const user = useSelector((state) => state.auth.user);
    const styles = useStyles();


    return <React.Fragment>
        <div className={styles.root}>
            {shoesBought.map((e) => <BuyCard item={e}/>)}
        </div>
    </React.Fragment>;
}
