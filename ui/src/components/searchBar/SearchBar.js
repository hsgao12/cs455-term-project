import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 500,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar(props) {
    const history = useHistory();
    const setOpen = props.setOpen;
    const [term, setTerm] = useState(" ");
    const classes = useStyles();
    const handleChange = (event) => {
        setTerm(event.target.value);
    }
    const handleKeypress = (event) => {
        if (event.keyCode === 13) {
            handleClick(event);
        }
    };

    const handleClick = (event) => {
        history.push(`/search/${term}`);
    }


    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="What are you looking for?"
                inputProps={{ 'aria-label': 'What are you looking for?' }}
                onChange={handleChange}
            />
            <IconButton id= "searchbutton11" type="submit" className={classes.iconButton} aria-label="search" onKeyPress={handleKeypress} onClick = {handleClick}>
                    <SearchIcon/>
            </IconButton>
        </Paper>
    );
}