import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './wiener X Logo.jpg';
import TextLogo from '../images/TextLogo.png';

import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    useMediaQuery,
    Menu,
    MenuList,
    MenuItem,
    Popover, ClickAwayListener, useTheme
} from '@material-ui/core';


import {Button} from '@material-ui/core';

import {useSelector, useDispatch} from 'react-redux';

import {signout} from '../../store/actions/authActions';
import ContrastNavButton from "./ContrastNavButton";
import Background from "../homepage/mainPPic.jpeg";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        background: "white",
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingTop: "0.5em",
        paddingBottom: "0.5em"
    },
    leftSide: {
        marginLeft: "1em",
        background: "inherit",
        alignContent: "center",
        marginTop: "auto",
        marginBottom: "auto",

    },
    rightSide: {
        marginLeft: "auto",
        marginRight: "1em",
        display: "grid",
        gridTemplateColumns: "auto auto"
    },
    rightSideSmall: {
        [theme.breakpoints.up('md')]: {}
    },
    button: {
        marginTop: "auto",
        marginBottom: "auto",
        color: 'black',
        fontSize: "1.2em",
        textAlign: "center",
        marginLeft: "2em"
    },
    menuPaper: {
        background: theme.palette.nav.main
    }
}));

function Navbar(props) {

    const {authenticated, loading} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const styles = useStyles();

    const handleClick = () => {
        dispatch(signout());
    }

    const isSmall = useMediaQuery("(max-width: 600px)");

    const [menuOpen, setMenuOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    return (
        <AppBar className={styles.root} position={"static"}>
            <div className={styles.leftSide}>
                <Link to="/" className={styles.button}>
                    <img src={Logo} style={{width:43, height:43}}/>
                </Link>
            </div>
            <div style={{display: "grid", placeContent: "center" }}>
                <img src={TextLogo} style={{height:43}}/>
            </div>
            {/*^^^this is temporary^^^*/}
            {!isSmall &&
            <div className={styles.rightSide}>
                {authenticated ? (
                    <React.Fragment>
                        <Link to="/profile">
                            <ContrastNavButton
                                size={"large"}
                            >
                                Profile
                            </ContrastNavButton>
                        </Link>
                        <ContrastNavButton onClick={handleClick} size={"large"} >Sign Out</ContrastNavButton>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <LoginButton/>
                        <RegisterButton/>
                    </React.Fragment>
                )}
            </div>
            }
            {isSmall && <div className={styles.rightSide}>
                <ContrastNavButton onClick={(e) => {
                    setMenuOpen(true);
                    setAnchorEl(e.currentTarget)
                }}
                                   size={"large"}
                >
                    <MenuIcon/>
                </ContrastNavButton>

                <Menu open={menuOpen} onClose={() => setMenuOpen(false)} anchorEl={anchorEl}
                      classes={{paper: styles.menuPaper}}>
                    <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                        {authenticated ? (
                            <React.Fragment>
                                <Link to="/profile">
                                    <MenuItem>
                                        <ContrastNavButton
                                            size={"large"}
                                        >
                                            Profile
                                        </ContrastNavButton>
                                    </MenuItem>
                                </Link>
                                <MenuItem>
                                    <ContrastNavButton onClick={handleClick} size={"large"}>Sign Out</ContrastNavButton>
                                </MenuItem>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <MenuItem>
                                    <LoginButton/>
                                </MenuItem>
                                <MenuItem>
                                    <RegisterButton/>
                                </MenuItem>
                            </React.Fragment>
                        )}
                    </ClickAwayListener>
                </Menu>
            </div>
            }
        </AppBar>
    );
}

export default Navbar;
