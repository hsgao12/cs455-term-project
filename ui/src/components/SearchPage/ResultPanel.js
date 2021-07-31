import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ShoesCard from '../shoesListing/ShoesCard';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

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

export default function ResultPanel({ searchTerm }) {
  const [results, setResults] = useState([]);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(24);
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(async () => {
    Axios.get(`/searchShoes/${searchTerm}`).then((res) => {
      const resultData = res.data;
      setResults(resultData);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    let value = parseInt(event.target.outerText);
    if (value <= 1) {
      setMinIndex(0);
      setMaxIndex(24);
    } else {
      setMinIndex((value-1) * 24);
      setMaxIndex((value) * 24);
    }
  };

  if (results.length === 0) {
    return (
      <div>
        <h2>NOTHING TO SEE HERE! PLEASE CHANGE YOUR FILTERS</h2>
      </div>
    );
  } else {
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {results.slice(minIndex, maxIndex).map((shoe) => (
            <Grid key={shoe._id} item xs={3}>
              <ShoesCard shoe={shoe} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.floor(results.length / 24 + 1)}
          shape="rounded"
          onChange={handleChange}
        />
      </main>
    );
  }
}
