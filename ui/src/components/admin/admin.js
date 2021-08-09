import React from 'react';
import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import Axios from "axios";




const useStyles = makeStyles((theme)=>({

}));

function Admin() {
    const styles = useStyles();



    return (
        <Paper>
            <Button onClick={async ()=>{
                await Axios.post("/recalculatePopularListings");
            }}>
                recalculate popular shoes
            </Button>
        </Paper>
    );
}

export default Admin;
