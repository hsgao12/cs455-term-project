import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { setError } from '../../store/actions/authActions';

import ErrorAlert from '../ErrorAlert';

import {
    makeStyles,
    TextField,
    Typography,
    Paper,
    Card,
    List,
    ListItem,
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modalBody: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        marginBottom: '15px',
    },
    input: {
        marginBottom: '15px',
    },
    buttonContainer: {
        justifyContent: 'center',
    },
}));

const EditListing = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { error, loading, user } = useSelector((state) => state.auth);
    const [item, setItem] = useState(props.item);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        };
    }, [error, dispatch]);

    const onClick = () => {
        props.editItem(props.item._id, item.size, item.price);
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    return (
        <Paper className={classes.modalBody}>
            <Card style={{ padding: '1em' }}>
                <Typography variant="h5" className={classes.headerText}>
                    Edit Listing
                </Typography>
                {error != '' && <ErrorAlert error={error} />}
                <List>
                    <ListItem>
                        <TextField
                            className={classes.input}
                            name="price"
                            label="Price"
                            variant="outlined"
                            fullWidth
                            value={item.price}
                            onChange={onChange}
                        />
                    </ListItem>
                    <ListItem>
                        <FormControl fullWidth={true} variant="outlined">
                            <InputLabel>Size</InputLabel>
                            <Select value={item.size} name={"size"} onChange={onChange} >
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>

                            </Select>
                        </FormControl>

                    </ListItem>
                    <ListItem className={classes.buttonContainer}>
                        <Button
                            className="loginButton"
                            color={'primary'}
                            variant={'contained'}
                            disabled={props.loading}
                            onClick={onClick}
                        >
                            {props.loading ? 'Loading' : 'Confirm'}
                        </Button>
                    </ListItem>
                </List>
            </Card>
        </Paper>
    );
};

export default EditListing;
