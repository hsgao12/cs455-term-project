import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from "react-redux";
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
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
}) {
  const classes = useStyles();
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [sellerItemId, setSellerItemId] = useState('');
  const user = useSelector((state) => state.auth.user);

  const handleVerifyAndSubmitClick = async () => {
    setMessageDisplay(true);
    const sellerItemData = {
      sneakerId: props.location.state.shoe._id,
      sellerId: user.id,
      buyerId:'',
      sold:false,
      size: size,
      price: amount.intitialAmount,
    };

    var response = await axios.post('/addNewSellerItem', sellerItemData);
    setSellerItemId(response.data);
    const billing = {
      sellerItemId: response.data,
      userId: user.id,
      userType: "seller",
      billing: {
        address: billingData.address,
        province: billingData.province,
        country: billingData.country,
        postalCode: billingData.postalCode,
      },
      payment: {
        cardNumber: billingData.creditCard,
        expDate: billingData.ExpDate,
        cvv: billingData.cvv,
      },
    };

    const shoes = {
      sneakerId: props.location.state.shoe._id,
      size: size.toString(),
      price: amount.intitialAmount,
    };
    await axios.post('/addUserBilling', billing);
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
          Exp Date: {billingData.ExpDate}
          <br></br>
          <br></br>
          <div style={{ fontWeight: 'bold' }}>Billing Address </div>
          <br></br>
          {billingData.firstName} {billingData.lastName} <br></br>
          {billingData.address} {billingData.province} <br></br>
          {billingData.postalCode} {billingData.country}
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleVerifyAndSubmitClick}
          >
            Verify and Confirm
          </Button>
        </Paper>
      </Grid>
      <br></br>
      {messageDisplay && (
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>{message}</Paper>
        </Grid>
      )}
    </Grid>
  );
}
