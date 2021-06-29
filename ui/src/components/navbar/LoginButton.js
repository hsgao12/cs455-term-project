import React, {useState} from 'react';
import {Button, CardHeader, CardMedia, CssBaseline, Input, List, ListItem} from '@material-ui/core';
import {Container, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card} from '@material-ui/core';
import Login from "../login/Login";
import Modal from "@material-ui/core/Modal";
import ContrastNavButton from "./ContrastNavButton";


function LoginButton() {
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    return <React.Fragment>
        <ContrastNavButton
            onClick={()=>setLoginFormOpen(true)}
            size={"large"}
        >
            Login
        </ContrastNavButton>
        <Modal open={loginFormOpen} onClose={()=>setLoginFormOpen(false)}>
            <Login setLoginFormOpen={setLoginFormOpen}/>
        </Modal>
    </React.Fragment>;
}

export default LoginButton;