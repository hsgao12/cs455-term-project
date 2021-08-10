import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductForBuyForm from './ProductForBuyForm';
import ProductForBillingInfoForm from '../productSellPage/ProductForBillingInfoForm';
import ProductBuyConfirmation from './ProductBuyConfirmation';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  shoeImage: {
    display: 'block',
    width: '100%',
    height: '40%',
  },
  shoeName: {
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
      <div>size (US): {size}</div>
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

export default function ProductBuyPage(props) {
  const classes = useStyles();
  const [billingInfo, setBillingInfo] = React.useState(false);
  const [size, setSize] = React.useState('');
  const initialAmount = {
    intitialAmount: '',
    proccessingAmount: '',
    shippingAmount: '',
    total: '',
  };
  const [amount, setAmount] = React.useState(initialAmount);
  const initialBillingInfo = {
    firstName: '',
    lastName: '',
    address: '',
    province: '',
    postalCode: '',
    country: '',
    creditCard: '',
    cvv: '',
    ExpDate: '',
  };
  const [billingData, setBillingData] = React.useState(initialBillingInfo);
  const [confirmationInfo, setConfirmationInfo] = React.useState(false);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Paper style={{ height: '100vh' }} className={classes.paper}>
            {ProductForSale(props, size)}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          {confirmationInfo && (
            <Paper style={{ height: '100vh' }} className={classes.paper}>
              <ProductBuyConfirmation
                props={props}
                size={size}
                amount={amount}
                billingData={billingData}
                setBillingInfo={setBillingInfo}
              />
            </Paper>
          )}
          {!confirmationInfo && (
            <Paper style={{ height: '100vh' }} className={classes.paper}>
              {billingInfo ? (
                <ProductForBillingInfoForm
                  props={props}
                  size={size}
                  amount={amount}
                  setSize={setSize}
                  setBillingInfo={setBillingInfo}
                  setConfirmationInfo={setConfirmationInfo}
                  billingData={billingData}
                  setBillingData={setBillingData}
                />
              ) : (
                <ProductForBuyForm
                  props={props}
                  size={size}
                  setSize={setSize}
                  amount={amount}
                  setAmount={setAmount}
                  setBillingInfo={setBillingInfo}
                />
              )}
            </Paper>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
