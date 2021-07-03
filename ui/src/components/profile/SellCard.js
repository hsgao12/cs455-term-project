import {Card, makeStyles, Paper, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
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
        gridRowGap:"0.5rem",
        gridTemplateRows:"auto 1fr"

    },
    itemDetails: {},
    itemButtons: {
        display: "grid",
        gridRowGap: "0.4em",
    }

}));

export default function SellCard(props) {
    const item = props.item;
    const styles = useCardStyles();

    return <Paper className={styles.root} variant={"elevation"} elevation={5} color={"primary"}>
        <div className={styles.itemImageRoot}>
            <img src={item.image} className={styles.itemImage}/>
            <div className={styles.itemButtons}>
                <Button color={"primary"} variant={"contained"}> button1</Button>
                <Button color={"primary"} variant={"contained"}> button2</Button>
                {/*more buttons here?*/}
            </div>
        </div>
        <div className={styles.itemDetails}>
            <Typography variant={"h5"}>
                {item.name}
            </Typography>
            <div>
                Price:{item.price}
            </div>
            <div>
                Buyer:{item.buyerName}
            </div>
            <div>
                Date:{item.dateBought}
            </div>
            <div style={{display:"flex"}}>
                <span style={{lineHeight:"0.89em"}}>Rating:</span><Rating value={item.rating} precision={0.1} readOnly={true} size={"small"}/> <span style={{lineHeight:"1em"}}>{item.rating}/5</span>
            </div>
            <div>
                Order ID:{item.orderID}
            </div>
        </div>


    </Paper>;
}
