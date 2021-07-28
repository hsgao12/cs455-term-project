import {Card, makeStyles, Paper, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import React from "react";


const useCardStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        padding: "0.5rem",
        gridColumnGap:"1rem",

    },
    itemImage: {
        maxWidth:"min(5rem,5vw)",
        width:"100%",
    },
    itemImageRoot:{
        display:"grid",
        maxWidth:"100%",
        gridTemplateRows:"auto"

    },
    itemDetails: {
        wordWrap:"break-word",
        overflow:"hidden"
    },
    itemButtons: {
        padding:"0.5em"

    }

}));

export default function ShoeCardSmall(props) {
    const item = props.item;
    const styles = useCardStyles();

    return <Paper className={styles.root} variant={"elevation"} elevation={5} color={"primary"}>
        <div className={styles.itemImageRoot}>
            <img src={item.img} className={styles.itemImage}/>

        </div>
        <div className={styles.itemDetails}>
            <Typography variant={"h6"} style={{wordWrap:"break-word"}}>
                {item.name}
            </Typography>

            <div>
                {""}
            </div>
            <div>size:{item.size}</div>
            <div>
                <Rating value={item.rating ?? 0} precision={0.1} readOnly={true} size={"small"}/>
            </div>
            <div>
                brand:{item.brand}
            </div>
            <div>
                ${item.price}
            </div>
        </div>
        <Paper className={styles.itemButtons}>
            <Button variant={"contained"} color={"primary"}>Buy</Button>
        </Paper>


    </Paper>;
}
