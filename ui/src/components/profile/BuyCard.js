import {Card, makeStyles, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";


const useCardStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        padding: "0.5rem",
        width:"90%",
        gridColumnGap:"1rem"
    },
    itemImage: {
        maxWidth:"7rem",
        width:"100%"
    },
    itemImageRoot:{
        display:"grid",
        maxWidth:"100%",
        gridRowGap:"0.5rem"

    },
    itemDetails: {},
    itemButtons: {
        display: "grid",
        gridRowGap: "0.4em",
    }

}));

export default function BuyCard(props) {
    const item = props.item;
    const styles = useCardStyles();

    return <Paper className={styles.root} variant={"elevation"} elevation={5} color={"primary"}>
        <div className={styles.itemImageRoot}>
            {/*card picture, 1/2 height*/}
            <img src={item.image} className={styles.itemImage}/>
            <div className={styles.itemButtons}>
                <Button color={"primary"} variant={"contained"}> button1</Button>
                <Button color={"primary"} variant={"contained"}> button2</Button>
                {/*more buttons here*/}
            </div>
        </div>
        <div className={styles.itemDetails}>
            {/*details*/}
            <Typography variant={"h5"}>
                {item.name}
            </Typography>
            <div>
                Price:{item.price}
            </div>
            <div>
                seller:{item.sellerName}
            </div>
            <div>
                Date:{item.dateBought}
            </div>
            <div>
                Rating:{item.rating}
            </div>
            <div>
                Order ID:{item.orderID}
            </div>
        </div>


    </Paper>;
}
