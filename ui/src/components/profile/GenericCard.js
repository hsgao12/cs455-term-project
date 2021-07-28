import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import React from "react";


const useCardStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        padding: "0.5rem",
        width: "90%",
        gridColumnGap: "1rem",
    },
    itemImage: {
        maxWidth: "7rem",
        width: "100%", 
        marginLeft: 'auto',
        marginRight: "5%",
    },
    itemImageRoot: {
        display: "grid",
        maxWidth: "100%",
        gridRowGap: "0.5rem",
        gridTemplateRows: "auto 1fr"

    },
    itemDetails: {},
    itemButtons: {
        display: "grid",
        gridRowGap: "0.4em",
    }

}));

export default function GenericCard(props) {
    const item = props.item;
    const styles = useCardStyles();

    return <Paper className={styles.root} variant={"elevation"} elevation={5} color={"primary"}>
        <div className={styles.itemDetails}>
            <div>
                <Typography variant={"h5"}>
                    {item.name}
                </Typography>

            </div>
            <div className={styles.priceContainer}>
                Price: ${item.price}
            </div>
        </div>
        <div className={styles.itemImageRoot}>
            <img src={item.img} className={styles.itemImage} />
            <div className={styles.itemButtons}>
            </div>
        </div>


    </Paper>;
}
