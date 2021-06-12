import React, {useState} from 'react';
import ReleasesGrid from '../../components/upcoming-releases/ReleasesCarousel';
import SearchBar from "../searchBar/SearchBar";
import ShoesList from "../shoesListing/ShoesList";
import Grid from '@material-ui/core/Grid';
import "./homePageStyle.css";
import Modal from "@material-ui/core/Modal";
import Login from "../login/Login";


export default function HomePage() {

    return (
        <div className="homepage">
            <SearchBar/>
            <div className="infolists">
                <div className="box">
                    <span>Popular Listing</span>
                    <ShoesList/>
                </div>
                <div className="box">
                    <span>upcoming Release</span>
                    <ReleasesGrid/>
                </div>
            </div>
        </div>
    );
}