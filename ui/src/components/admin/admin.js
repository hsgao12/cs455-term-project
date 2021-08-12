import React, {useState, useEffect} from 'react';
import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import Axios from "axios";
import UserTable from "./UserTable";
import ShoesTable from "./ShoesTable";
import ListingMessage from "./ListingMessage";
import "./admin.css";



const useStyles = makeStyles((theme)=>({

}));

function Admin() {
    const styles = useStyles();


    return (<div className="adminContainer">
            <div className="headerContainer">
                <h2>User Table</h2>
            </div>
            <div className="tableContainer">
                <UserTable/>
            </div>
            <div className="headerContainer">
                <h2>Shoes Table</h2>
            </div>
            <div className="tableContainer">
                <ShoesTable/>
            </div>
        </div>
    );
}

export default Admin;
