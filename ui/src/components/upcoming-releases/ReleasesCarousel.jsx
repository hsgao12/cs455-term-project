import React from 'react'; 
import Carousel from 'react-material-ui-carousel';
import ReleasesCard from './ReleasesCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
      [theme.breakpoints.up("md")]: {
      },
    }, 
  }));
  

const ReleasesGrid = () => { 
    const classes = useStyles();

    return (
        <div className="releaseListDiv">
            <Carousel
                className={classes.root}
                autoPlay={false}
                animation={"slide"}
                indicators={false}
                NavButtonsAlwaysVisible={true}
                navButtonsAlwaysInvisible={false}
                timeout={500}
            >
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>

            </Carousel>
        </div>
    )
}

export default ReleasesGrid;