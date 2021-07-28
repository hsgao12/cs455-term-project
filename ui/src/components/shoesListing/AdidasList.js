import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoesCard from './ShoesCard';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 10,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    maxWidth: '1322px',
    minWidth: '1322px',
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  button: {
    color: 'rgb(0,99,64)',
    fontFamily: 'RingsideWideSSm-Medium_Web, sans-serif',
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'right',
  },
}));

export default function AdidasList() {
  const [shoes, setShoes] = useState([]);

  const updateShoes = () => {
    Axios.get('/getShoes/Adidas')
      .then((res) => {
        const shoesData = res.data;
        const randNum = Math.floor(Math.random() * (shoesData.length - 4));
        const newShoes = shoesData.slice(randNum, randNum + 4);
        setShoes(newShoes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateShoes();
  }, []);

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <a className={classes.button} href={'/search'}>
        See All
      </a>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {shoes.map((shoe) => (
          <Grid key={shoe._id} item xs={3}>
            <ShoesCard shoe={shoe} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
