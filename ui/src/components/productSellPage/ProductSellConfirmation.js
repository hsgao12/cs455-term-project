import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function ProductSellConfirmation({
  props,
  size,
  amount,
  billingData,
  setBillingInfo,
  billingSaved,
}) {
  const classes = useStyles();
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [sellerItemId, setSellerItemId] = useState('');
  const user = useSelector((state) => state.auth.user);
  function handleBackToProductPage() {}

  const handleVerifyAndSubmitClick = async () => {
    setMessageDisplay(true);
    const sellerItemData = {
      sneakerId: props.location.state.shoe._id,
      sellerId: user.id,
      buyerId: '',
      sold: false,
      size: size,
      price: amount.intitialAmount,
    };

    var response = await axios.post('/addNewSellerItem', {
      ...sellerItemData,
      size: size.toString(),
    });
    setSellerItemId(response.data);
    console.log(sellerItemId);
    const billing = {
      userId: user.id,
      billing: {
        address: billingData.address,
        province: billingData.province,
        country: billingData.country,
        postalCode: billingData.postalCode,
      },
      payment: {
        cardNumber: billingData.creditCard,
        expDate: billingData.expDate,
        cvv: billingData.cvv,
        firstName: billingData.firstName,
        lastName: billingData.lastName,
      },
    };

    const shoes = {
      sneakerId: props.location.state.shoe._id,
      size: size.toString(),
      price: amount.intitialAmount,
    };
    await axios.post('/addUserBilling', {
      billing: billingData,
      billingSaved: billingSaved,
      userId: user.id,
    });
    await axios.patch('/updateShoesStockAdd', shoes);

    setMessage('Great, the sneaker has been added to the Sale List.');
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12}>
        <div style={{ fontWeight: 'bolder' }}>Payment and Billing Summary </div>
        <br></br>
        <Paper className={classes.paper}>
          <div style={{ fontWeight: 'bold' }}>Payment Summary </div>
          <br></br>
          Selling Price: ${amount.intitialAmount}
          <br></br>
          Total Payout: ${amount.payOut}
          <br></br>
          <br></br>
          <div style={{ fontWeight: 'bold' }}>Card Details</div>
          <br></br>
          Card Number: {billingData.creditCard}
          <br></br>
          CVV: {billingData.cvv}
          <br></br>
          Exp Date: {billingData.expDate}
          <br></br>
          <br></br>
          <div style={{ fontWeight: 'bold' }}>Billing Address </div>
          <br></br>
          {billingData.firstName} {billingData.lastName} <br></br>
          {billingData.address} {billingData.province} <br></br>
          {billingData.postalCode} {billingData.country}
          <br></br>
          <br></br>
          <Grid container>
            <Grid item xs={6} sm={6}>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={{
                  pathname: '/shoes/' + props.location.state.shoe._id,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Back to Product Page
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleVerifyAndSubmitClick}
              >
                Verify and Confirm
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <br></br>
      {messageDisplay && (
        <Grid item xs={12} sm={12}>
          <Paper Paper style={{ backgroundColor: '#e8f5e9' }}className={classes.paper}>{message}</Paper>
        </Grid>
      )}
    </Grid>
  );
}
