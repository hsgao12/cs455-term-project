import React, {useState, useEffect} from 'react';
import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import Axios from "axios";
import UserTable from "./UserTable";
import ShoesTable from "./ShoesTable";
import ListingMessage from "./ListingMessage";




const useStyles = makeStyles((theme)=>({

}));

function Admin() {
    const styles = useStyles();


    return (<div>
            <UserTable/>
            <ShoesTable/>
            <ListingMessage/>
        </div>
    );
}

export default Admin;
