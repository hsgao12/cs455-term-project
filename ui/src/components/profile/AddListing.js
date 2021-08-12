import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { setError } from '../../store/actions/authActions';

import ErrorAlert from '../ErrorAlert';

import { debounce } from 'lodash';

import axios from 'axios';

import { Link } from 'react-router-dom';

import {
  makeStyles,
  TextField,
  Typography,
  Paper,
  Card,
  List,
  ListItem,
} from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modalBody: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    justifyContent: 'center',
    paddingTop: '1rem',
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
  link: {
    textDecoration: 'none',
  },
}));

const AddListing = (props) => {
  const [shoes, setShoes] = useState([]);
  const [allShoes, setAllShoes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState('true');
  const [loading, setLoading] = useState('false');

  useEffect(async () => {
    const res = await axios.get(`/getShoes`);
    setAllShoes(res.data);
  }, []);

  const onChange = async (event) => {
    setLoading(true);
    if (event.target.value !== '' && event.target.value !== 0) {
      const res = await axios.get(
        `/search/autocomplete?term=${event.target.value}`
      );
      setShoes(res.data.result);
    }
    setLoading(false);
  };

  const handleSelect = (event) => {
    const selectedName = event.target.outerText;
    const filteredArr = allShoes.filter((shoe) => shoe.name === selectedName);
    if (filteredArr.length >= 1) {
      setDisabled(false);
      setSelected(filteredArr[0]);
    } else {
      setDisabled(true);
    }
  };

  const debouncedEvent = debounce(onChange, 300);

  const onOpen = (event) => {
  };

  const styles = useStyles();
  return (
    <Paper className={styles.modalBody}>
      <Typography variant="h5" className={styles.headerText}>
        Add Listing
      </Typography>
      <List>
        <ListItem>
          <Autocomplete
            freeSolo
            disableClearable
            fullWidth
            options={shoes.map((option) => option.name)}
            onClose={handleSelect}
            onInputChange={debouncedEvent}
            onOpen={debouncedEvent}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
        </ListItem>
        <ListItem className={styles.buttonContainer}>
          <Link
            className={styles.link}
            to={{
              pathname: '/productSellPage',
              state: {
                shoe: selected,
              },
            }}
          >
            <Button variant="contained" color="primary" disabled={disabled}>
              Add Listing
            </Button>
          </Link>
        </ListItem>
      </List>
    </Paper>
  );
};

export default AddListing;
