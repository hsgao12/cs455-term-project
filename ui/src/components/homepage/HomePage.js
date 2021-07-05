import React, {useState} from 'react';
import ReleasesGrid from '../../components/upcoming-releases/ReleasesCarousel';
import SearchBar from "../searchBar/SearchBar";
import ShoesList from "../shoesListing/ShoesList";
import "./homePageStyle.css";
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    box: {
        width: "31.25rem",

        maxWidth: "90vw",
        margin: "0 auto"
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
        }
    },
    boxHeader: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    searchBackground: {
        margin: "auto",
        width: "100%",
        minHeight: "450px",
        height: "100%",
        background: "#3f51b5",
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
                    <ShoesList/>
                </div>
                <div className={styles.box}>
                    <Typography variant={'h6'} className={styles.boxHeader}>Upcoming Releases</Typography>
                    <ReleasesGrid/>
                </div>
            </div>
        </div>
    );
}