import React, {useState, useEffect} from 'react';
import {Card, makeStyles, Paper, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab"
import Button from "@material-ui/core/Button";
import Axios from "axios";
import UserTable from "./UserTable";
import ShoesTable from "./ShoesTable";
import ListingMessage from "./ListingMessage";
import "./admin.css";
import PopularList from "../shoesListing/PopularList";


const useStyles = makeStyles((theme) => ({}));

function Admin() {
    const styles = useStyles();


    return (
        <div style={{display: "grid", gridTemplateColumns: "50% auto"}}>
            <div className="adminContainer">

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
            <div className= "recalbtnContainer">
                <paper>
                    <h2>Current Status of Popular shoes List</h2>
                    <h5> If you want recalculate the popular listing, just click this button.</h5>
                    <Button onClick={async () => {
                        await Axios.post("/recalculatePopularListings");
                    }} color={"primary"}
                            variant={"contained"}>
                        recalculate
                    </Button>
                    <div className= "listingContainer">
                        <h2>Listing Status</h2>
                        <ListingMessage/>
                    </div>
                </paper>
            </div>

        </div>
    );
}

export default Admin;
