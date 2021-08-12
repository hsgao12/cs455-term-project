import React, {useState} from 'react';
import SearchBar from "../searchBar/SearchBar";
import PopularList from "../shoesListing/PopularList";
import "./homePageStyle.css";
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography} from "@material-ui/core";
import Background from './mainPPic.jpeg';
import ShoesList from "../shoesListing/ShoesList";

const useStyles = makeStyles((theme) => ({
    box: {
        margin: "auto",
    },
    infolists: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridColumnGap: "3.5em",
        justifyContent: "center",
        gridRowGap: "1rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "auto",
            gridColumnGap: "0",
        },
        margin: ' auto',
    },
    boxHeader: {
        marginTop: 10,
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    searchBackground: {
        margin: "auto",
        width: "100%",
        minHeight: "1050px",
        height: "100%",
        backgroundImage: `url(${Background})`,
    }

}));

export default function HomePage() {
    const styles = useStyles();

    return (
        <div className="homepage">
            <div className={styles.searchBackground}>
                <SearchBar/>
            </div>
            <div className={styles.infolists}>
                <div className={styles.box}>
                    <Typography variant={'h6'} className={styles.boxHeader}>Popular Listings</Typography>
                    <PopularList/>
                </div>
            </div>
            <div className={styles.infolists}>
                <div className={styles.box}>
                    <Typography variant={'h6'} className={styles.boxHeader}>Nike</Typography>
                    <ShoesList term={"Nike"}/>
                </div>
            </div>
            <div className={styles.infolists}>
                <div className={styles.box}>
                    <Typography variant={'h6'} className={styles.boxHeader}>Adidas</Typography>
                    <ShoesList term={"Adidas"}/>
                </div>
            </div>
        </div>
    );
}