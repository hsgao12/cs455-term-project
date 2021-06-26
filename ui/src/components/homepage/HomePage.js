import React, {useState} from 'react';
import ReleasesGrid from '../../components/upcoming-releases/ReleasesCarousel';
import SearchBar from "../searchBar/SearchBar";
import ShoesList from "../shoesListing/ShoesList";
import "./homePageStyle.css";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    boxHeader: {
        fontWeight: "bold",
        fontSize: "1.3rem"
    },
    box: {
        width: "31.25rem"
    },
    infolists: {},

});

export default function HomePage() {
    const styles = useStyles();

    return (
        <div className="homepage">
            <SearchBar/>
            <div className="infolists">
                <div className={styles.box}>
                    <span className={styles.boxHeader}>Popular Listings</span>
                    <ShoesList/>
                </div>
                <div className={styles.box}>
                    <span className={styles.boxHeader}>Upcoming Releases</span>
                    <ReleasesGrid/>
                </div>
            </div>
        </div>
    );
}