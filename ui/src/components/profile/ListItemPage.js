import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  setLoading,
  setError,
  setSuccess,
} from '../../store/actions/authActions';
import ErrorAlert from '../ErrorAlert';
import SuccessAlert from '../SuccessAlert';

import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
  },

  formControl: {
    minWidth: 100,
    float: 'right',
  },
  priceTextField: {
    width: '75%',
  },
  container: {
    marginBottom: '1rem',
  },
}));

export default function ListItemPage(props) {
  const { loading, error, user, success } = useSelector((state) => state.auth);
  const styles = useStyles();

  const dispatch = useDispatch();

  const [itemName, setItemName] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);

  const handleSelect = (event) => {
    setSize(event.target.value);
  };

  const onPriceChange = (e) => {
    const newVal = e.target.value;
    if (newVal < 0) {
      setPrice(0);
    } else {
      setPrice(newVal);
    }
  };

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
      if (success) {
        dispatch(setSuccess(''));
      }
    };
  }, [error, dispatch]);

  const onClick = async () => {
    try {
      if (error) {
        dispatch(setError(''));
      }
      if (success) {
        dispatch(setSuccess(''));
      }
      if (size === '') {
        throw new Error('Please select a size');
      }
      dispatch(setLoading(true));
      const result = await axios.post(`/addNewSellerItem`, {
        name: itemName,
        sellerId: user.id,
        size: size,
        price: price,
      });
      console.log(result);
      dispatch(setLoading(false));
      console.log(result);
      dispatch(setSuccess('Item has been added!'));
    } catch (err) {
      console.log(err.message);
      dispatch(setError(err.message));
    }
  };

  const onNameChange = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={(styles.topText, styles.container)}>
        <Typography variant={'h5'}>Add New Listing</Typography>
      </div>
      {error.length > 0 && <ErrorAlert error={error} />}
      {success.length > 0 && <SuccessAlert success={success} />}
      <div className={(styles.nameContainer, styles.container)}>
        <TextField
          className={styles.nameTextField}
          label="Name"
          type="search"
          variant="filled"
          fullWidth={true}
          value={itemName}
          onChange={onNameChange}
        />
      </div>
      <div className={styles.container}>
        <TextField
          className={styles.priceTextField}
          label="Price"
          type="number"
          variant="filled"
          onChange={onPriceChange}
          value={price}
        />
        <FormControl variant="filled" className={styles.formControl}>
          <InputLabel>Size</InputLabel>
          <Select onChange={handleSelect}>
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
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" color="primary" onClick={onClick}>
          Add Listing
        </Button>
      </div>
    </div>
  );
}
