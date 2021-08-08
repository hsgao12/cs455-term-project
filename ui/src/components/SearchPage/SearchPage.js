import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import { useLocation, useParams } from 'react-router';
import Axios from 'axios';
import {
  Button,
  Input,
  OutlinedInput,
  TextField,
  makeStyles,
  IconButton,
  Collapse,
  Box,
  Paper,
  Tooltip,
  Slider,
  Container,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import SearchBar from '../searchBar/SearchBar';
import ShoeCardBig from './ShoeCardBig';
import DetailedInfoView from './DetailedInfoView';
import DenseView from './DenseView';
import axios from 'axios';
import ResultPanel from './ResultPanel';
import FilterPanel from "./FilterPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    align: 'right',
    marginTop: 30,
    display: 'grid',
  },
  content: {
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto',
  },
  shoesPanel: {
    display: 'flex',
  },
  lPanel:{
    marginLeft: '1em',
    marginRight: '1em',
    minWidth: '15%',
  },
  rPanel: {
    marginRight: '4em',
  },
  topPanel: {
    minHeight: '250px',
  },
  topHeader: {
    textAlign: 'center',
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
  }
}));

export default function SearchPage(props) {
  const searchTerm = props.match.params.query;
  const [results, setResults] = useState([]);
  const [originalResults, setOriginalResults] = useState([]);
  const [filters, setFilters] = useState(
  {
    "price": {},
        "size":{}
  }
  );
  const classes = useStyles();

  const handlePrice = (filters) => {
    console.log("iam called");
    console.log(filters["price"]);
    let tmpArr = [];

    if(!filters.first && !filters.second && !filters.third && !filters.forth && !filters.fifth && !filters.sixth && !filters.seventh){
      tmpArr = [...originalResults];
      setResults(tmpArr);
    }

    originalResults.forEach(shoe => {
      if(filters.first && shoe.price <= 100){
        tmpArr.push(shoe);
      }
      else if(filters.second && (shoe.price >= 100 && shoe.price <=200)){
        tmpArr.push(shoe);
      }
      else if(filters.third && (shoe.price >= 200 && shoe.price <=300)){
        tmpArr.push(shoe);
      }
      else if(filters.forth && (shoe.price >= 300 && shoe.price <=400)){
        tmpArr.push(shoe);
      }
      else if(filters.fifth && (shoe.price >= 400 && shoe.price <=500)){
        console.log("i should be called");
        tmpArr.push(shoe);
      }
      else if(filters.sixth && (shoe.price >= 500 && shoe.price <=600)){
        tmpArr.push(shoe);
      }
      else if(filters.seventh && shoe.price >= 600 ){
        tmpArr.push(shoe);
      }
    });
    setResults(tmpArr);
  }

  const handleSize = () => {

  }

  const handleFilter = (filter, category) => {
      const newFilters = {...filters};
      newFilters[category] = filter;
      setFilters(newFilters);

      if(category == "price")
        handlePrice(filter);
      else
        handleSize(filter);

  }

  useEffect(async () => {
    if(searchTerm && searchTerm !== " ") {
       Axios.get(`/searchShoes/${searchTerm}`).then((res) => {
        const resultData = res.data;
        setResults(resultData);
        setOriginalResults(resultData);
      });
    } else {
       Axios.get(`/getShoes`).then((res) => {
        const resultData = res.data;
        setResults(resultData);
        setOriginalResults(resultData);
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.topPanel}>
        <h1 className={classes.topHeader}>Search Results</h1>
      </div>
      <div className={classes.shoesPanel}>
        <div className={classes.lPanel}>
          <FilterPanel handleFilter={(filters, category) => handleFilter(filters, category )}/>
        </div>
        <div className={classes.rPanel}>
          <ResultPanel results={results} originalResults={originalResults} setResults={setResults} setOriginalResults={setOriginalResults} />
        </div>
      </div>
    </div>
  );
}

/*
export default function SearchPage() {
    const params = new URLSearchParams(useLocation().search);
    const theme = useTheme();
    const [shoesList, setShoesList] = useState([]);
    const [wat,setWat] = useState(false);

    const forceReload = ()=>setWat(!wat);

    const searchTerm = params.get("query") ?? "";
    const [minPrice, maxPrice, minSize, maxSize, brandsString] = params.getAll("minPrice", "maxPrice", "minSize", "maxSize", "brands");
    //const brands = JSON.parse(brandsString);

    const styles = useStyles();
    const view = "detailed";

    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(async ()=>{
        const data = (await axios.get(`/search/${searchTerm}`)).data;
        console.log(data);
        setShoesList(data);
    },[wat]);

    return (<Container maxWidth={"xl"}>
        <div style={{position: "relative", marginBottom: "1em"}}>
            <div style={{visibility: "hidden"}}>
                <SearchBar init={searchTerm}/>
            </div>
            {/!*lol*!/}
            <div style={{position: "absolute", top: "0", width: "100%"}}>
                <SearchBar init={searchTerm} buttonClick={()=>setWat(!wat)}/>
            </div>
        </div>
        <div className={styles.content}>
            <div style={{display: "grid"}}>
                {/!*search options*!/}
                <div>
                    <Button>button1</Button>
                </div>
                <div>
                    <Input placeholder={"put stuff here"}></Input>
                </div>
            </div>
            <div>
                {view === "detailed" && <DetailedInfoView shoes={shoesList}/>}
                {view === "dense" && <DenseView shoes={shoesList}/>}
            </div>
        </div>
    </Container>);
}*/
