import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductForSaleForm from './ProductForSaleForm';
import ProductForBillingInfoForm from './ProductForBillingInfoForm';
import ProductSellConfirmation from './ProductSellConfirmation';
import axios from 'axios';

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

export default function ProductSellPage(props) {
  const classes = useStyles();
  const initialBillingStatus= {
    billingInfo: false,
    billingInfoType: '',
  };
  const [billingInfo, setBillingInfo] = React.useState(initialBillingStatus);
  const [size, setSize] = React.useState('');
  const initialAmount = {
    intitialAmount: '',
    transAmount: '',
    proccessingAmount: '',
    payOut: '',
  };
  const [amount, setAmount] = React.useState(initialAmount);
  const initialBillingInfo = {
    firstName: '',
    lastName: '',
    address: '',
    province: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cvv: '',
    expDate: '',
  };
  const [billingData, setBillingData] = React.useState(initialBillingInfo);
  const [confirmationInfo, setConfirmationInfo] = React.useState(false);
  const [billingSaved, setBillingSaved] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  React.useEffect(async () => {
    const res = await axios.get(`/getUserBilling/${user.id}`);
    const billing = res.data.billing;
    if (res.data.billing) {
      console.log(res.data.billing);
      const fetchedBillingInfo = { ...billing.billing, ...billing.payment };
      setBillingData(fetchedBillingInfo);
      setBillingSaved(true);
    }
    console.log(billingData);
  }, []);
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={6} sm={6}>
          <Paper style={{ height: '100vh' }} className={classes.paper}>
            {ProductForSale(props, size)}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          {confirmationInfo && (
            <Paper style={{ height: '100vh'}} className={classes.paper}>
              <ProductSellConfirmation
                props={props}
                size={size}
                amount={amount}
                billingData={billingData}
                setBillingInfo={setBillingInfo}
                billingSaved={billingSaved}
              />
            </Paper>
          )}
          {!confirmationInfo && (
            <Paper style={{ height: '100vh'}} className={classes.paper}>
              {billingInfo.billingInfo ? (
                <ProductForBillingInfoForm
                  props={props}
                  size={size}
                  amount={amount}
                  setAmount={setAmount}
                  setSize={setSize}
                  billingInfo={billingInfo}
                  setBillingInfo={setBillingInfo}
                  setConfirmationInfo={setConfirmationInfo}
                  billingData={billingData}
                  setBillingData={setBillingData}
                  billingSaved={billingSaved}
                />
              ) : (
                <ProductForSaleForm
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
