import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { List } from '@material-ui/core';

import {
  Card,
  IconButton,
  Input,
  makeStyles,
  OutlinedInput,
  TextareaAutosize,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Label } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import BuyCard from './BuyCard';
import SellCard from './SellCard';
import { Autocomplete } from '@material-ui/lab';

const shoesBought = [
  {
    name: 'Adidas-Yeezy360-zyon',
    image: '/shoes-images/Adidas-Yeezy360-zyon.webp',
    price: 500,
    buyerName: 'potato',
    sellerID: '1233556',
    dateBought: '21/5/27',
    orderID: '23231',
    rating: 3.4,
  },
  {
    name: 'Adidas-Yeezy360-zyon',
    image: '/shoes-images/Adidas-Yeezy360-zyon.webp',
    price: 500,
    buyerName: 'potato',
    sellerID: '1233556',
    dateBought: '21/5/27',
    orderID: '23231',
    rating: 3.2,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '75%',
  },
  container: {
    display: 'grid',
    gridRowGap: '1rem',
    maxHeight: '100%',
    overflow: 'auto',
  },
}));

export default function SellHistory(props) {
  const user = useSelector((state) => state.auth.user);
  const styles = useStyles();

  return (
    <React.Fragment>
      <div className={styles.root}>
        <List className={styles.container}>
          {shoesBought.map((e) => (
            <SellCard item={e} />
          ))}
          {shoesBought.map((e) => (
            <SellCard item={e} />
          ))}
        </List>
      </div>
    </React.Fragment>
  );
}
