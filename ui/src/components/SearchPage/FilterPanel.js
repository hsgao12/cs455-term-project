import React, {useState} from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    sizebtns: {

    },
}));


export default function FilterPanel() {
    const classes = useStyles();

    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleChange = (event, newFormats) => {
        setFormats(newFormats);
    };
    return (
        <div>
            <div className={classes.sizebtns}>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="1" aria-label="1">
                        1
                    </ToggleButton>
                    <ToggleButton value="1.5" aria-label="1.5">
                        1.5
                    </ToggleButton>
                    <ToggleButton value="2" aria-label="2">
                        2
                    </ToggleButton>
                    <ToggleButton value="2.5" aria-label="2.5">
                        2.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="3" aria-label="3">
                        3
                    </ToggleButton>
                    <ToggleButton value="3.5" aria-label="3.5">
                        3.5
                    </ToggleButton>
                    <ToggleButton value="4" aria-label="4">
                        4
                    </ToggleButton>
                    <ToggleButton value="4.5" aria-label="4.5">
                        4.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="5" aria-label="5">
                        5
                    </ToggleButton>
                    <ToggleButton value="5.5" aria-label="5.5">
                        5.5
                    </ToggleButton>
                    <ToggleButton value="6" aria-label="6">
                        6
                    </ToggleButton>
                    <ToggleButton value="6.5" aria-label="6.5">
                        6.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="7" aria-label="7">
                        7
                    </ToggleButton>
                    <ToggleButton value="7.5" aria-label="7.5">
                        7.5
                    </ToggleButton>
                    <ToggleButton value="8" aria-label="8">
                        8
                    </ToggleButton>
                    <ToggleButton value="8.5" aria-label="8.5">
                        8.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="9" aria-label="9">
                        9
                    </ToggleButton>
                    <ToggleButton value="9.5" aria-label="9.5">
                        9.5
                    </ToggleButton>
                    <ToggleButton value="10" aria-label="10">
                        10
                    </ToggleButton>
                    <ToggleButton value="10.5" aria-label="10.5">
                        10.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="11" aria-label="11">
                        11
                    </ToggleButton>
                    <ToggleButton value="11.5" aria-label="11.5">
                        11.5
                    </ToggleButton>
                    <ToggleButton value="12" aria-label="12">
                        12
                    </ToggleButton>
                    <ToggleButton value="12.5" aria-label="12.5">
                        12.5
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={formats} exclusive onChange={handleChange}>
                    <ToggleButton value="13" aria-label="13">
                        13
                    </ToggleButton>
                    <ToggleButton value="13.5" aria-label="13.5">
                        13.5
                    </ToggleButton>
                    <ToggleButton value="14" aria-label="14">
                        14
                    </ToggleButton>
                    <ToggleButton value="14.5" aria-label="14.5">
                        14.5
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    );
}