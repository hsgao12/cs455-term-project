import { React, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import userIDValue from '../../store/actions/authActions';
import axios from 'axios';

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

export default function ProductBuyConfirmation({
  props,
  size,
  amount,
  billingData,
  setBillingInfo,
}) {
  const classes = useStyles();
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');

  const handleVerifyAndSubmitClick = async () => {
    setMessageDisplay(true);
    const sellerItemData = {
      sneakerId: props.location.state.shoe._id,
      sellerId: userIDValue.userID,
      buyerId:'',
      sold:false,
      size: size,
      price: amount.intitialAmount,
    };
    console.log(sellerItemData);
  const buyerData = {
    buyerId:userIDValue.userID,
    sold:true,
  }
    const billing = {
      userId: userIDValue.userID,
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
    console.log(billing);

    await axios.put('/updateSellerItem'+'/'+sellerItemData.sneakerId+'/'+sellerItemData.size+'/'+sellerItemData.price, buyerData);
    await axios.post('/addUserBilling', billing);
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
          Price: ${amount.intitialAmount}
          <br></br>
          Total: ${amount.total}
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