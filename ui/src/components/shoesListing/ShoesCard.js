import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: 300,
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',

    image: {
      display: 'block',
    },
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'block',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  numSale: {
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'RingsideRegular-Book, sans-serif',
  },
  price: {
    fontWeight: '700',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
}));

export default function ShoesCard({ shoe }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/shoes/${shoe._id}`} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={shoe.img}
            title={shoe.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="subtitle2" gutterBottom>
                {shoe.name}
              </Typography>
              <Typography variant="h5" className={classes.price}>
                ${shoe.price}
              </Typography>
              <Typography className={classes.numSale}>
                #Of Sale: {shoe.numberOfSale}
              </Typography>
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
