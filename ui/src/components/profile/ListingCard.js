import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import React from 'react';
import EditListingButton from './EditListingButton';

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
    bottom: 15,
  },
  sizeText: {
    position: 'absolute',
    bottom: 40
  },
  itemName: {
    position: 'absolute',
    top: 15,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.getContrastText(theme.palette.background.default)
  }
}));

export default function ListingCard(props) {
  const item = props.item;
  const styles = useCardStyles();

  const handleDelete = () => {
    props.deleteItem(item._id);
  }

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
          <EditListingButton item={item} editItem={props.editItem} loading={props.loading} />
          <Button color={'primary'} variant={'contained'} onClick={handleDelete}>
            {' '}
            Delete
          </Button>
        </div>
      </div>
      <div className={styles.itemDetails}>
        <Link to={`/shoes/${item.sneakerId}`} className={styles.link}>
        <Typography variant={'h5'} className={styles.itemName}>
          {item.name}
        </Typography>
        </Link>
      <Typography className={styles.priceText}>
        Price: ${item.price}
      </Typography>
      <Typography className={styles.sizeText}>
        Size {item.size}
      </Typography>
      </div>
    </Paper >
  );
}
