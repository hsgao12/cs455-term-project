import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
 function Navbar() {
    return (<div className="NavBar">
        <div className="leftSide">
        <ul className="TopNav">
                <Link className="navList" to="/home">
                <li className ="ListStyle">Home</li>
                </Link>
                <Link className="navList" to="/about">
                <li className ="ListStyle">About</li>
                </Link>
                </ul>
        </div>
        <div className="rightSide">
        <ul className="TopNav">
                <Link className="navList" to="/login">
                <li className ="ListStyle">Login</li>
                </Link>
                <Link className="navList" to="/registration">
                <li className ="ListStyle">Registration</li>
                </Link>
                </ul>
        </div> 
        </div>)
}
export default Navbar;     