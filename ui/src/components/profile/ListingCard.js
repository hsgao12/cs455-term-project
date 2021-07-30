import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import React from 'react';

const useCardStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    padding: '0.5rem',
    width: '90%',
    gridColumnGap: '1rem',
  },
  itemImage: {
    maxWidth: '7rem',
    width: '100%',
  },
  itemImageRoot: {
    display: 'grid',
    maxWidth: '100%',
    gridRowGap: '0.5rem',
    gridTemplateRows: 'auto 1fr',
  },
  itemDetails: {
    position: 'relative',
  },
  itemButtons: {
    display: 'grid',
    gridRowGap: '0.4em',
  },
  priceText: {
    position: 'absolute',
    bottom: 10,
  },
  itemName: {
    position: 'absolute',
    top: 10,
  },
}));

export default function ListingCard(props) {
  const item = props.item;
  const styles = useCardStyles();

  return (
    <Paper
      className={styles.root}
      variant={'elevation'}
      elevation={5}
      color={'primary'}
    >
      <div className={styles.itemImageRoot}>
        <img src={item.img} className={styles.itemImage} />
        <div className={styles.itemButtons}>
          <Button color={'primary'} variant={'contained'}>
            {' '}
            Edit
          </Button>
          <Button color={'primary'} variant={'contained'}>
            {' '}
            Delete
          </Button>
        </div>
      </div>
      <div className={styles.itemDetails}>
        <Typography variant={'h5'} className={styles.itemName}>
          {item.name}
        </Typography>
        <Typography className={styles.priceText}>
          Price: ${item.price}
        </Typography>
      </div>
    </Paper>
  );
}
