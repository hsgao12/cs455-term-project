
import React, {useState} from 'react';
import {Button, useTheme} from '@material-ui/core';




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
