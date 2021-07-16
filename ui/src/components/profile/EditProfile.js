import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { editShipping, setError } from '../../store/actions/authActions';

import ErrorAlert from '../ErrorAlert';

import {
  makeStyles,
  TextField,
  Typography,
  Paper,
  Card,
  List,
  ListItem,
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

const EditProfile = (props) => {
  const classes = useStyles();
  const [shipping, setShipping] = useState({
    address: '',
    city: '',
    country: '',
  });

  const dispatch = useDispatch();

  const { error, loading, user } = useSelector((state) => state.auth);
  const onChange = (event) => {
    const { name, value } = event.target;
    setShipping((prevShipping) => ({ ...prevShipping, [name]: value }));
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      clickHandler(null);
    }
  };

  const clickHandler = (e) => {
    if (error) {
      dispatch(setError(''));
    }
    dispatch(editShipping(user.id, shipping, props.setModal));
  };

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  return (
    <Paper className={classes.modalBody}>
      <Card style={{ padding: '1em' }} onKeyPress={enterHandler}>
        <Typography variant="h5" className={classes.headerText}>
          Edit Shipping Address
        </Typography>
        {error != '' && <ErrorAlert error={error} />}
        <List>
          <ListItem>
            <TextField
              className={classes.input}
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              value={shipping.address}
              onChange={onChange}
            />
          </ListItem>
          <ListItem>
            <TextField
              className={classes.input}
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              value={shipping.city}
              onChange={onChange}
            />
          </ListItem>
          <ListItem>
            <TextField
              className={classes.input}
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              value={shipping.country}
              onChange={onChange}
            />
          </ListItem>
          <ListItem className={classes.buttonContainer}>
            <Button
              className="loginButton"
              color={'primary'}
              variant={'contained'}
              onClick={clickHandler}
              disabled={loading}
            >
              {loading ? 'Loading' : 'Confirm'}
            </Button>
          </ListItem>
        </List>
      </Card>
    </Paper>
  );
};

export default EditProfile;
