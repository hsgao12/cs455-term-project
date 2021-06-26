import React, {useState} from 'react';
import {Button, CardHeader, CardMedia, CssBaseline, Input, List, ListItem} from '@material-ui/core';
import {Container, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card} from '@material-ui/core';
import Login from "../login/Login";
import Modal from "@material-ui/core/Modal";


function LoginButton() {
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    return <React.Fragment>
        <Button
            onClick={()=>setLoginFormOpen(true)}
            style={{color:"White"}}
            size={"large"}
        >
            Login
        </Button>
        <Modal open={loginFormOpen} onClose={()=>setLoginFormOpen(false)}>
            <Login/>
        </Modal>
    </React.Fragment>;
}

export default LoginButton;