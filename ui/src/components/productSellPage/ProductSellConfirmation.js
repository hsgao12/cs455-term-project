import {React, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function ProductSellConfirmation({
  props,
  size,
  amount,
  billingData,
  setBillingInfo,
}) 
{ const classes = useStyles();
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleVerifyAndSubmitClick = () => {
    setMessageDisplay(true);
    setMessage("hit");
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12}>
        <div style={{ fontWeight: "bolder" }}>Payment and Billing Summary </div><br></br>
        <Paper className={classes.paper}>
          <div style={{ fontWeight: "bold" }}>Payment Summary </div>
          <br></br>
          Selling Price: ${amount.intitialAmount}
          <br></br>
          <br></br>
          Total Payout: ${amount.payOut}
          <br></br>
          <br></br>
          <div style={{ fontWeight: "bold" }}>Card Details</div>
          <br></br>
          Card Number: {billingData.creditCard}

          <br></br>
          <br></br>
          CVV: {billingData.cvv}
          <br></br>
          <br></br>
          Exp Date: {billingData.ExpDate}
          <br></br>
          <br></br>
          <div style={{ fontWeight: "bold" }}>Billing Address </div>
          <br></br>
          {billingData.firstName} { billingData.lastName} <br></br>
          {billingData.address} { billingData.province} <br></br>
          {billingData.postalCode} { billingData.country}
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
      </Grid>)}
    </Grid>
  );
}
