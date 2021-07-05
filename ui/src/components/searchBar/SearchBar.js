import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchBarStyle.css";
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
    Slider
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    searchInput: {
        height: "3rem",
        paddingRight: "0"
    },
    searchWrapper: {
        maxWidth: "min(550px,100vw)",
        background: "rgba(0,0,0,0.6)",
        gridColumnGap: "0rem",
        padding: "1em",
        borderRadius: "5px",
        margin: "0 auto",
        color: "white"

    },
    searchWrapperInner: {
        display: "grid",
        gridTemplateColumns: "1fr auto auto",

        gridColumnGap: "0.3rem",
    },
    searchButton: {
        background: theme.palette.search.main,
        '&:hover': {
            background: theme.palette.search.dark
        },
        border: "1px solid currentcolor",
        height: "100%"
    },

    filterStuff: {
        gridColumn: "span 2"

    },

    filterStuffPaper: {
        paddingTop: "2.3em",
        paddingBottom: "1em",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
    },
    filterStuffInputForm: {
        display: "grid",
        gridTemplateColumns: "auto 1fr 1fr 1fr",
        paddingRight: "1em",
        gridRowGap: "0.1em",
        gridColumnGap: "1em"
    }

}));

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTabOpen, setFilterTabOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [sizeRange, setSizeRange] = useState([0, 20]);

    const style = useStyles();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (<div className={style.searchWrapper}>
        <Paper className={style.searchWrapperInner}>
            <OutlinedInput
                placeholder="What are you looking for?"
                fullWidth={true}
                color={"primary"}
                className={style.searchInput}
                onChange={handleInputChange}
                endAdornment={<div style={{height:"100%"}}><Button className={style.searchButton}>
                    <SearchIcon/>
                </Button></div>}
            />


            <Tooltip title={"filters"}>
                <IconButton variant={"contained"}
                            onClick={() => setFilterTabOpen(!filterTabOpen)}>
                    <TuneIcon style={{color: "black"}}/>
                </IconButton>
            </Tooltip>
            {/*this looks ugly ;-;*/}
            <Collapse in={filterTabOpen} className={style.filterStuff}>

                <div className={style.filterStuffPaper}>


                    <div className={style.filterStuffInputForm}>
                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Price</div>
                            <Slider style={{gridColumn: "span 2"}} valueLabelDisplay={"on"}
                                    value={priceRange}
                                    onChange={(e, v) => setPriceRange(v)}
                                    scale={(e) => 5 * Math.floor(1.1 ** (e - 1))}

                            />
                            <Input/>
                        </React.Fragment>}

                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Brand</div>
                            <div style={{gridColumn: "span 3"}}><Input fullWidth margin={"dense"}/></div>
                        </React.Fragment>}

                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Size</div>
                            <Slider style={{gridColumn: "span 2"}}
                                    valueLabelDisplay={"auto"}
                                    value={sizeRange}
                                    onChange={(e, v) => setSizeRange(v)}
                                    max={20}
                                    step={0.5}

                            />
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "auto auto auto",
                                gridColumnGap: "0.2rem"
                            }}>
                                <Input
                                    value={sizeRange[0]}
                                    inputProps={{type: "number", min: 0, max: 20, step: 0.5}}
                                    onChange={(e) => setSizeRange([Number(e.target.value), sizeRange[1]])}
                                />
                                <span>-</span>
                                <Input
                                    value={sizeRange[1]}
                                    inputProps={{type: "number", min: 0, max: 20, step: 0.5}}
                                    onChange={(e) => setSizeRange(
                                        [sizeRange[0],
                                            Number(e.target.value)
                                        ])
                                    }

                                />
                            </div>
                        </React.Fragment>}


                    </div>

                </div>
            </Collapse>
        </Paper>
    </div>);

    return (<div className="searchBackground">
        <div className="searchWrapper">
            <input type="text" className="searchInput" placeholder="What are you looking for?"
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchIcon className="searchBtn"></SearchIcon>
        </div>
    </div>)
}