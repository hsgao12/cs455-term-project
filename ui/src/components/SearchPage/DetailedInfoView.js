import {Card, makeStyles, Paper, Typography, Button} from "@material-ui/core";

import React from "react";
import ShoeCardBig from "./ShoeCardBig";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "1em",

    }
}))

export default function DetailedInfoView(props) {
    const styles = useStyles();
    return <Paper className={styles.root}>
        {
            props.shoes.map((shoe) => <ShoeCardBig item={shoe}/>)
        }
    </Paper>

}


