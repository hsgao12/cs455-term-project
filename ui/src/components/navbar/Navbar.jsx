import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { signout } from '../../store/actions/authActions';


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        background: "#333",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingTop: "0.5em",
        paddingBottom: "0.5em"
    },
    leftSide: {
        marginLeft: "1em",
        background: "inherit",
        display: "flex",
        alignContent: "center",
        textAlign: "center"
    },
    rightSide: {
        marginLeft: "auto",
        marginRight: "1em",
        display: "grid",
        gridTemplateColumns: "auto auto"
    },
    button: {
        marginTop: "auto",
        marginBottom: "auto",
        color: "white",
        fontSize: "1.2em",
        textAlign: "center",
        marginLeft: "2em"
    }
});

function Navbar(props) {
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    //TODO change this to get profile from something, maybe pass it in as a prop?
    const { authenticated, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const styles = useStyles();

    const handleClick = () => {
        dispatch(signout());
    }

    return (
        <AppBar className={styles.root} position={"static"}>
            <div className={styles.leftSide}>
                <Link to="/" className={styles.button}>
                    Home
                </Link>
                <Link to="/productDetail" className={styles.button}>
                    product
                </Link>
            </div>
            <div style={{ display: "grid", placeContent: "center" }}>LOGO HERE</div>
            <div className={styles.rightSide}>
                {authenticated ? (
                    <React.Fragment>
                        <Link to="/profile">
                            <Button
                                style={{ color: "White" }}
                                size={"large"}
                            >
                                Profile
                            </Button>
                        </Link>
                        <Button onClick={handleClick} style={{color: "White"}} size={"large"}>Sign Out</Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <LoginButton />
                        <RegisterButton />
                    </React.Fragment>
                )}
            </div>
        </AppBar>
    );
}

export default Navbar;
