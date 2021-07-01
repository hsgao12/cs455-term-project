
import React, {useState} from 'react';
import {Button, CardHeader, CardMedia, CssBaseline, Input, List, ListItem, useTheme} from '@material-ui/core';
import {Container, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card} from '@material-ui/core';
import Login from "../login/Login";
import Modal from "@material-ui/core/Modal";



function ContrastNavButton(props) {
    const theme = useTheme();

    return <Button
            {...props}
            style={{...props.style,color:theme.palette.getContrastText(theme.palette.nav.main)}}
        >
            {props.children}
        </Button>;

}

export default ContrastNavButton;
