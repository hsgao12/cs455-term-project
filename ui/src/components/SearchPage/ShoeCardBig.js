import {Card, makeStyles, Paper, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import React from "react";


const useCardStyles = makeStyles((theme) => ({
    root: {
        display: "inline-grid",
        gridTemplateColumns: "auto 1fr auto",
        padding: "0.5rem",
        width:"95%",
        gridColumnGap:"1rem",
    },
    itemImage: {
        maxWidth:"min(10rem,15vw)",
        width:"100%",
    },
    itemImageRoot:{
        display:"grid",
        maxWidth:"100%",
        gridTemplateRows:"auto"

    },
    itemDetails: {
        overflow:"hidden",
        textOverflow:"ellipsis"
    },
    itemButtons: {
        padding:"0.5em"

    }

}));

export default function ShoeCardBig(props) {
    const item = props.item;
    const styles = useCardStyles();

    return <Paper className={styles.root} variant={"elevation"} elevation={5} color={"primary"}>
        <div className={styles.itemImageRoot}>
            <img src={item.img} className={styles.itemImage}/>

        </div>
        <div className={styles.itemDetails}>
            <Typography variant={"h5"}>
                {item.name}
            </Typography>
            <div>
                Price:{item.price}
            </div>
            <div>
                Sold by {""}
            </div>
            <div>size:{item.size}</div>
            <div>
                <Rating value={item.rating ?? 0} precision={0.1} readOnly={true} size={"small"}/>
            </div>
            <div>
                brand:{item.brand}
            </div>
            <div style={{overflow:"hidden",textOverflow:"ellipsis"}}>
                {item.description}
            </div>
        </div>
        <Paper className={styles.itemButtons}>
            <Button variant={"contained"} color={"primary"}>Buy</Button>
        </Paper>


    </Paper>;
}
