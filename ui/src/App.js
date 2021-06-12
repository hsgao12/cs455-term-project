import React, {useState} from 'react';
import ReleasesGrid from './components/upcoming-releases/ReleasesCarousel';
import Login from './components/login/Login'
import {Modal} from "@material-ui/core";
import Header from './components/header/Header';
function App() {
    const [loginFormOpen,setLoginFormOpen] = useState(false);

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
