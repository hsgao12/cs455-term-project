import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Login from '../login/Login';
import Register from '../login/Register';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
function Navbar(props) {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  //TODO change this to get profile from something, maybe pass it in as a prop?
  const [profile, setProfile] = useState(null); //null means not logged in,

  return (
    <div className="NavBar">
      <div className="leftSide">
        <ul className="TopNav">
          <Link className="navList" to="/home">
            <li className="ListStyle">Home</li>
          </Link>
          <Link className="navList" to="/about">
            <li className="ListStyle">About</li>
          </Link>
        </ul>
      </div>
      <div className="rightSide">
        <ul className="TopNav">
          {profile ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment>
              <LoginButton />
              <RegisterButton />
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
