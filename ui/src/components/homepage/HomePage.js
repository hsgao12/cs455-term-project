import React, {useState} from 'react';
import ReleasesGrid from '../../components/upcoming-releases/ReleasesCarousel';
import SearchBar from "../searchBar/SearchBar";
import ShoesList from "../shoesListing/ShoesList";
import "./homePageStyle.css";
import {makeStyles} from '@material-ui/core/styles';
import {Box, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    box: {
        width: "31.25rem",
    },
    infolists: {
    },

});

export default function HomePage() {
    const styles = useStyles();

    return (
        <div className="homepage">
            <SearchBar/>
            <div className="infolists">
                <div className={styles.box}>
                    <Typography variant={'h6'}>Popular Listings</Typography>
                    <ShoesList/>
                </div>
                <div className={styles.box}>
                    <Typography variant={'h6'}>Upcoming Releases</Typography>
                    <ReleasesGrid/>
                </div>
            </div>
        </div>
    );
}