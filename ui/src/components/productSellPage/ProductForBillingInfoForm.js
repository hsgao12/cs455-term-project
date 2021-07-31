import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'red',
    backgroundColor: '#ffcccc'
  },
  billingInfo: {
    fontWeight: "bold",
  },
  bg: {
   backgroundColor: '#ff7675'
  },
  Info: {
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const BillInfo = {
  firstName: "",
  lastName: "",
  address: "",
  province: "",
  postalCode: "",
  country: "",
  creditCard: "",
  cvv: "",
  ExpDate: "",
};
export default function ProductForBillingInfoForm({
  props,
  size,
  amount,
  setSize,
  setBillingInfo,
  setConfirmationInfo,
  billingData,
  setBillingData,
}) {
  const classes = useStyles();
  const [error, setError] = React.useState('');
  const [selectedDate, handleDateChange] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const countries = [
    { name: "Canada" },
    { name: "US" },
    { name: "China" },
    { name: "India" },
  ];

  const handleSubmit = () => {
    var dt = new Date(selectedDate);
    var dtm = dt.getMonth();
    var dty = dt.getFullYear();
    BillInfo.ExpDate = dtm + "/" + dty;
    setBillingData(BillInfo);
    console.log(BillInfo);
    if(isNaN(BillInfo.creditCard)){
      setError("Card Number is not of type Number. Please enter a valid number!");
    }
    else if(isNaN(BillInfo.cvv)){
      setError("CVV is not of type Number. Please enter a valid number!");
    }
    else if(!BillInfo.firstName || !BillInfo.lastName || !BillInfo.address ||
      !BillInfo.province || !BillInfo.postalCode || !BillInfo.country || BillInfo.ExpDate === "11/1969"
      || !BillInfo.creditCard || !BillInfo.cvv || !BillInfo.ExpDate || BillInfo.ExpDate === null){
        setError("One of the required fields is empty, please input all the fields!");
      }
    else{
      setConfirmationInfo(true);
    }
  };
  const handleFirstNameChange = (event) => {
    BillInfo.firstName = event.target.value;
  };
  const handleLastNameChange = (event) => {
    BillInfo.lastName = event.target.value;
  };
  const handleCountryChange = (event, value) => {
    if(value === undefined){
      setError("Please select Country from Drop Down Menu");
    }
    else{
      console.log(value)
      BillInfo.country = value;
    }
  };
  const handleAddressChange = (event) => {
    BillInfo.address = event.target.value;
  };
  const handleProvinceChange = (event) => {
    BillInfo.province = event.target.value;
  };
  const handlePostalChange = (event) => {
    BillInfo.postalCode = event.target.value;
  };
  const handleCreditCardChange = (event) => {
    BillInfo.creditCard = event.target.value;
  };
  const handleCVVChange = (event) => {
    BillInfo.cvv = event.target.value;
    console.log(selectedDate);
  };
  const handleBack = () => {
    setBillingInfo(false);
  };
  return (
    <div>
      <div className={classes.billingInfo}>Billing</div>
      <div>Please choose your billing method</div>
      {error!== "" && (
      <Grid className={classes.bg}item xs={12} sm={12}>
          <Paper className={classes.paper}>{error}</Paper>
        </Grid>)}
      <div className={classes.Info}>Credit Card</div>
      <FormControl fullWidth className={classes.margin}>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Card Number"
              onChange={handleCreditCardChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="CVV"
              onChange={handleCVVChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            openTo="year"
            minDate={new Date("2021-03-01")}
            maxDate={new Date("2030-06-01")}
            value={selectedDate}
            onChange={(newValue) => {
              handleDateChange(newValue);
            }}
            views={["year", "month"]}
            label="Card Exp Date"
            helperText="Start from year selection"
          />
        </MuiPickersUtilsProvider>
        <br></br>
        <div style={{ fontWeight: "bold", textAlign: "left" }}>
          Billing Info
        </div>
        <br></br>
        <TextField
          label="First Name"
          onChange={handleFirstNameChange}
          variant="outlined"
        />
        <br></br>
        <TextField
          label="Last Name"
          onChange={handleLastNameChange}
          variant="outlined"
        />
        <br></br>
        <Autocomplete
          options={countries}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          onInputChange={handleCountryChange}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" />
          )}
        />
        <br></br>
        <TextField
          label="Address"
          onChange={handleAddressChange}
          variant="outlined"
        />
        <br></br>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Province"
              onChange={handleProvinceChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="Postal Code"
              onChange={handlePostalChange}
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
