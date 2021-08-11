import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'red',
    backgroundColor: '#ffcccc',
  },
  billingInfo: {
    fontWeight: 'bold',
  },
  bg: {
    backgroundColor: '#ff7675',
  },
  Info: {
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: '20px',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ProductForBillingInfoForm({
  props,
  size,
  amount,
  setAmount,
  setSize,
  billingInfo,
  setBillingInfo,
  setConfirmationInfo,
  billingData,
  setBillingData,
  billingSaved,
}) {
  const classes = useStyles();
  const [error, setError] = React.useState('');
  const [selectedDate, handleDateChange] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const countries = ['Canada', 'US', 'China', 'India'];

  const handleSubmit = () => {
    if (isNaN(billingData.cardNumber)) {
      setError(
        'Card Number is not of type Number. Please enter a valid number!'
      );
    } else if (isNaN(billingData.cvv)) {
      setError('CVV is not of type Number. Please enter a valid number!');
    } else if (
      !billingData.firstName ||
      !billingData.lastName ||
      !billingData.address ||
      !billingData.province ||
      !billingData.postalCode ||
      !billingData.country ||
      !billingData.cardNumber ||
      !billingData.cvv ||
      !billingData.expDate ||
      billingData.expDate === null
    ) {
      setError(
        'One of the required fields is empty, please input all the fields!'
      );
    } else {
      setConfirmationInfo(true);
    }
  };

  const handleBack = () => {
    if(billingInfo.billingInfoType == 'sell'){
      const initialAmount = {
        intitialAmount: '',
        transAmount: '',
        proccessingAmount: '',
        payOut: '',
      };
  
      setAmount(initialAmount);
      setSize('');
      const initialBillingStatus= {
        billingInfo: false,
        billingInfoType: 'sell'
      }
      setBillingInfo(initialBillingStatus);
    }
    else if(billingInfo.billingInfoType == 'buy'){
      const initialAmount = {
        intitialAmount: '',
        proccessingAmount: '',
        shippingAmount: '',
        total: '',
      };
  
      setAmount(initialAmount);
      setSize('');
      const initialBillingStatus= {
        billingInfo: false,
        billingInfoType: 'buy'
      }
      setBillingInfo(initialBillingStatus);
    }
   
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setBillingData((prevBilling) => ({ ...prevBilling, [name]: value }));
  };

  const handleExpiryDate = (event) => {
    const value = event.target.value;
    let clearValue = value.replace(/\D+/g, '');
    if (clearValue.length > 3) {
      clearValue = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }
    setBillingData((prevBilling) => ({ ...prevBilling, expDate: clearValue }));
  };

  const [countryText, setCountryText] = React.useState(billingData.country);

  return (
    <div>
      <div className={classes.billingInfo}>Billing</div>
      <div>Please choose your billing method</div>
      {error !== '' && (
        <Grid className={classes.bg} item xs={12} sm={12}>
          <Paper className={classes.paper}>{error}</Paper>
        </Grid>
      )}
      <div className={classes.Info}>Credit Card</div>

      <FormControl fullWidth className={classes.margin}>
        <Grid container>
          <Grid item xs={4} sm={4}>
            <TextField
              name="cardNumber"
              label="Card Number"
              onChange={onChange}
              value={billingData.cardNumber}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              name="cvv"
              value={billingData.cvv}
              label="CVV"
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              name="expDate"
              value={billingData.expDate}
              label="Expiry Date"
              onChange={handleExpiryDate}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <div style={{ fontWeight: 'bold', textAlign: 'left' }}>
          Billing Info
        </div>
        <br></br>
        <TextField
          label="First Name"
          name="firstName"
          value={billingData.firstName}
          onChange={onChange}
          variant="outlined"
        />
        <br></br>
        <TextField
          label="Last Name"
          name="lastName"
          value={billingData.lastName}
          onChange={onChange}
          variant="outlined"
        />
        <br></br>
        <br></br>
        <Autocomplete
          options={countries}
          style={{ width: 300 }}
          name="country"
          value={billingData.country}
          onChange={(event, newValue) => {
            console.log(newValue);
            setBillingData((prevBilling) => ({
              ...prevBilling,
              country: newValue,
            }));
          }}
          inputValue={countryText}
          onInputChange={(event, newInputValue) => {
            setCountryText(newInputValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" />
          )}
        />
        <br></br>
        <TextField
          label="Address"
          variant="outlined"
          name="address"
          value={billingData.address}
          onChange={onChange}
        />
        <br></br>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Province"
              name="province"
              value={billingData.province}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Postal Code"
              name="postalCode"
              value={billingData.postalCode}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </FormControl>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleBack}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
