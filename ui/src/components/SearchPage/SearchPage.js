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
  const [loading, setLoading] = useState(true);
  const [originalResults, setOriginalResults] = useState([]);
  const [filters, setFilters] = useState(
  {
    price: {},
        size:{}
  }
  );

  const classes = useStyles();

  const executeFilter = (filter) => {
    let tmpArr = [];
    console.log(filter);
    if(!filter.price.first && !filter.price.second && !filter.price.third && !filter.price.forth && !filter.price.fifth && !filter.price.sixth && !filter.price.seventh){
      console.log("am i all not true?");
      tmpArr = [...originalResults];
    } else {

      originalResults.forEach(shoe => {
        if (filter.price.first && shoe.price <= 100) {
          tmpArr.push(shoe);
        } else if (filter.price.second && (shoe.price >= 100 && shoe.price <= 200)) {
          tmpArr.push(shoe);
        } else if (filter.price.third && (shoe.price >= 200 && shoe.price <= 300)) {
          tmpArr.push(shoe);
        } else if (filter.price.forth && (shoe.price >= 300 && shoe.price <= 400)) {
          tmpArr.push(shoe);
        } else if (filter.price.fifth && (shoe.price >= 400 && shoe.price <= 500)) {
          tmpArr.push(shoe);
        } else if (filter.price.sixth && (shoe.price >= 500 && shoe.price <= 600)) {
          tmpArr.push(shoe);
        } else if (filter.price.seventh && shoe.price >= 600) {
          tmpArr.push(shoe);
        }
      });
    }

    if(filter.size.selected) {
      let finalArr = [];
      tmpArr.forEach(shoe => {
        shoe.stock.forEach(eachSize => {
          if (eachSize.size == filter.size.selected && eachSize.quantity > 0)
            finalArr.push(shoe);
        });
      });

      setResults(finalArr);
    }else {
      setResults(tmpArr);
    }
  }

  const handleFilter = (filter, category) => {
      const newFilters = {...filters};

      if(category == "price")
        newFilters.price = filter;
      else
        newFilters.size = filter;

      setFilters(newFilters);
      executeFilter(newFilters);

  }

  useEffect(async () => {
    if(searchTerm && searchTerm !== " ") {
       Axios.get(`/searchShoes/${searchTerm}`).then((res) => {
        const resultData = res.data;
        setResults(resultData);
        setOriginalResults(resultData);
        setLoading(false);
      });
    } else {
       Axios.get(`/getShoes`).then((res) => {
        const resultData = res.data;
        setResults(resultData);
        setOriginalResults(resultData);
         setLoading(false);
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
          <ResultPanel loading ={loading} results={results} originalResults={originalResults} setResults={setResults} setOriginalResults={setOriginalResults} />
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
