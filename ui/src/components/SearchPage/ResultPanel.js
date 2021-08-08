import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ShoesCard from '../shoesListing/ShoesCard';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


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
  sortbtn: {

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ResultPanel({ results, originalResults, setResults, setOriginalResults }) {
  const [shoes, setShoes] = useState([]);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(24);
  const [originList, setOriginList] = useState([]);
  const [sort, setSort] = useState("none");
  const classes = useStyles();

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

  const handleSort = (event) => {
    let sortValue = event.target.value;
    setSort(sortValue);
    let tmpArr = [...results];
    switch(sortValue) {
      case "Highest Price":
        tmpArr.sort(function(a,b){
          return b.price-a.price;
        });
        setResults(tmpArr);
        break;
      case "Lowest Price":
        tmpArr.sort(function(a,b){
          return a.price-b.price;
        });
        setResults(tmpArr);
        break;
      case "Highest Sale":
        tmpArr.sort(function(a,b){
          return b.numberOfSale-a.numberOfSale;
        });
        setResults(tmpArr);
        break;
      case "Lowest Sale":
        tmpArr.sort(function(a,b){
          return a.numberOfSale-b.numberOfSale;
        });
        setResults(tmpArr);
        break;
      case "None":
        setResults([...originalResults]);
      default:
        break;
    }
  }

  if (results.length === 0) {
    return (
      <div>
        <h2>NOTHING TO SEE HERE! PLEASE CHANGE YOUR FILTERS</h2>
      </div>
    );
  } else {
    return (
      <main className={classes.content}>
        <div className={classes.sortbtn}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="sort-label">Sort By:{sort}</InputLabel>
            <Select
                labelId="sort-select-filled-label"
                id="sort-select-id"
                onChange={handleSort}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Highest Price"}>Highest Price </MenuItem>
              <MenuItem value={"Lowest Price"}>Lowest Price</MenuItem>
              <MenuItem value={"Highest Sale"}>Highest Sale</MenuItem>
              <MenuItem value={"Lowest Sale"}>Lowest Sale</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {results.slice(minIndex, maxIndex).map((shoe) => (
            <Grid key={shoe._id} item xs={3}>
              <ShoesCard shoe={shoe} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.floor(shoes.length / 24 + 1)}
          shape="rounded"
          onChange={handleChange}
        />
      </main>
    );
  }
}
