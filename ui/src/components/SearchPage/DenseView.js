import {Card, makeStyles, Paper, Typography, Button} from "@material-ui/core";

import React from "react";
import ShoeCardSmall from "./ShoeCardSmall";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "1em",
        display: "inline grid",
        gridTemplateColumns: "repeat(5,12em)",
        gridColumnGap: "0.7em",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2,9em)",
        }
    }
}))

export default function DetailedInfoView(props) {
    const styles = useStyles();
    return <Paper className={styles.root}>
        {
            props.shoes.map((shoe) => <ShoeCardSmall item={shoe}/>)
        }
    </Paper>

}


