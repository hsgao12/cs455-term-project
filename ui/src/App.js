
import React, {useState} from 'react';
import ReleasesGrid from './components/upcoming-releases/ReleasesCarousel';
import Login from './components/login/Login'
import {Modal} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/login/Register";
import HomePage from "./components/homepage/HomePage";

function App() {

    return (
        <div className="App">
            <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/"component={HomePage}/>
                        <Route path="/home" component={HomePage}/>
                    </Switch>
            </Router>
        </div>
    );
}

export default App;
