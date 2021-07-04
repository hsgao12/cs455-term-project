import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import "./SearchBarStyle.css";
import {Button, Input, OutlinedInput, TextField, makeStyles, IconButton, Collapse, Box, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    searchInput: {
        background: theme.palette.background.default,
        height: "3rem"
    },
    searchWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 64px auto",
        maxWidth: "550px",
        background: "rgba(0,0,0,0.6)",
        gridColumnGap: "0.3rem",
        padding: "1em",
        paddingRight: "0.4em",
        borderRadius: "5px",
        margin: "0 auto",
        color: "white"

    },
    searchButton: {
        background: theme.palette.search.main,
        '&:hover': {
            background: theme.palette.search.dark
        },
    },

    filterStuff: {
        gridColumn: "span 3",
        paddingRight: "0.55em"
    },

    filterStuffPaper:{
        paddingBottom:"1em",
        borderTopLeftRadius:"0",
        borderTopRightRadius:"0",
    },
    filterStuffInputForm:{
        display:"inline-grid",
        gridTemplateColumns:"auto auto auto auto",
        paddingRight:"1em",
        gridRowGap:"0.1em"
    }

}));

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTabOpen, setFilterTabOpen] = useState(false);

    const style = useStyles();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (<div className="searchBackground">
        <div className={style.searchWrapper}>
            <OutlinedInput
                placeholder="What are you looking for?"
                fullWidth={true}
                color={"primary"}
                className={style.searchInput}
                onChange={handleInputChange}
            />
            <Button className={style.searchButton}>
                <SearchIcon/>
            </Button>
            <IconButton variant={"contained"} color={"secondary"} onClick={() => setFilterTabOpen(!filterTabOpen)}>
                <TuneIcon style={{color: "white"}}/>
            </IconButton>
            {/*this looks ugly ;-;*/}
            <Collapse in={filterTabOpen} className={style.filterStuff}>
                <Paper className={style.filterStuffPaper}>
                    <div style={{width: "100%", background: "linear-gradient(180deg,rgba(0,0,0,0.6) 0%, white 100%)", height: "50px"}}/>

                    <div className={style.filterStuffInputForm}>
                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Price</div>
                            <div>
                                <Input margin={"dense"}/>
                            </div>
                            <div>-</div>
                            <div>
                                <Input fullWidth margin={"dense"}/>
                            </div>
                        </React.Fragment>}

                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Brand</div>
                            <div style={{gridColumn: "span 3"}}><Input fullWidth margin={"dense"}/></div>
                        </React.Fragment>}

                        {<React.Fragment>{/*to organize the thingys*/}
                            <div dir={"rtl"} style={{marginTop: "auto", marginBottom: "auto"}}>Size</div>
                            <div>
                                <TextField margin={"dense"} type={"number"}/>
                            </div>
                            <div>-</div>
                            <div>
                                <TextField margin={"dense"} type={"number"}/>
                            </div>
                        </React.Fragment>}


                    </div>

                </Paper>
            </Collapse>

        </div>
    </div>);

    return (<div className="searchBackground">
        <div className="searchWrapper">
            <input type="text" className="searchInput" placeholder="What are you looking for?"
                   onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchIcon className="searchBtn"></SearchIcon>
        </div>
    </div>)
}