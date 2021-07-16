import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductForSaleForm from "./ProductForSaleForm";
import ProductForBillingInfoForm from "./ProductForBillingInfoForm";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  shoeImage:{
    display: 'block',
    width: '100%',
    height: '40%',
  },
  shoeName:{
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function ProductForSale(props, size) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.shoeName}>{props.location.state.shoe.name}</div>
      <div className={classes.shoeName}>
        brand: {props.location.state.shoe.brand}
      </div>
      <div>
      size (US): {size}
      </div>
      <div>
        <img
          className={classes.shoeImage}
          src={props.location.state.shoe.img}
          alt=""
        />
      </div>
    </div>
  );
}


export default function ProductSellPage(props) {
  const classes = useStyles();
  const [billingInfo, setBillingInfo] = React.useState(false);
  const [size, setSize] = React.useState('');
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={6} sm={6}>
          <Paper style={{height: '100vh'}} className={classes.paper}>
            {ProductForSale(props, size)}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper style={{height: '100vh'}}className={classes.paper}>
          {billingInfo?  <ProductForBillingInfoForm
          props={props}
          setBillingInfo = {setBillingInfo}
          /> :<ProductForSaleForm
          props={props}
          setSize = {setSize}
          setBillingInfo = {setBillingInfo}
          />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
