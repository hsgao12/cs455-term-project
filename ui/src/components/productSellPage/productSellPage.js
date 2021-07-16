import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,DatePicker} from "@material-ui/pickers";
import Autocomplete from '@material-ui/lab/Autocomplete';
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
  billingInfo:{
    fontWeight: 'bold',
    },
    Info:{
      fontWeight: 'bold',
      textAlign: 'left',
      paddingTop: '20px'
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

function ProductForBillingInfoForm({ props, setBillingInfo }) {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const countries = 
  [
  { name: 'Canada'},
  { name: 'US'},
  { name: 'China'},
  { name: 'India'}]

  const handleSubmit = () => {
   
  };
  const handleBack = () => {
   
  };
  return (
    <div>
      <div className={classes.billingInfo}>Billing</div>
      <div>Please choose your billing method</div>
      <div className={classes.Info}>Credit Card</div>
      <FormControl fullWidth className={classes.margin}>
      <Grid container >
        <Grid item xs={6} sm={6}>
        <TextField defaultValue="Card Number" label="Card Number" variant="outlined" />
        </Grid>
        <Grid item xs={6} sm={6}>
        <TextField defaultValue="000" label="CVV" variant="outlined" />
        </Grid>
        </Grid>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            openTo="year"
            minDate={new Date('2021-03-01')}
            maxDate={new Date('2023-06-01')}
            value = {selectedDate}
            onChange={handleDateChange}
            views={["year", "month"]}
            label="Card Exp Date"
            helperText="Start from year selection"
          />
        </MuiPickersUtilsProvider>
        <br></br>
        <div style={{fontWeight:'bold',textAlign: 'left'}}>Billing Info</div>
        <br></br>
        <TextField defaultValue="First Name" label="First Name" variant="outlined" />
        <br></br>
        <TextField defaultValue="Last Name" label="Last Name" variant="outlined" />
        <br></br>
        <Autocomplete
      options={countries}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
    /> <br></br>
        <TextField defaultValue="Address" label="Address" variant="outlined" />
        <br></br>
        <Grid container >
        <Grid item xs={6} sm={6}>
          <TextField defaultValue="Province" label="Province" variant="outlined" />
          </Grid>
        <Grid item xs={6} sm={6}>
        <TextField defaultValue="Postal Code" label="Postal Code" variant="outlined" />
        </Grid>
        </Grid>
      </FormControl>
      <Grid container>
        <Grid  item justify="flex-start">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleBack}
      >
        Back
      </Button></Grid>
      <Grid  item justify="flex-end">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSubmit}
      >
        Submit
      </Button></Grid>
      </Grid>
    </div>
  );
}

function ProductForSaleForm({ props, setSize, setBillingInfo }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const initialAmount = {
    intitialAmount: "",
    transAmount: "",
    proccessingAmount: "",
    payOut: "",
  };
  const [amount, setAmount] = React.useState(initialAmount);
  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleBillingInfoClick = () => {
    setBillingInfo(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAmountChange = (event) => {
    setAmount({
      intitialAmount: Number(event.target.value),
      transAmount: 0.095 * Number(event.target.value),
      proccessingAmount: 0.03 * Number(event.target.value),
      payOut:
        Number(event.target.value) -
        0.095 * Number(event.target.value) -
        0.03 * Number(event.target.value),
    });
  };
  return (
    <div>
      <div>
        <Button onClick={handleClickOpen}>Select Size</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Pick Sneaker Size</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel>Size</InputLabel>
                <Select onChange={handleChange} input={<Input />}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={5}>US 5</MenuItem>
                  <MenuItem value={6}>US 6</MenuItem>
                  <MenuItem value={7}>US 7</MenuItem>
                  <MenuItem value={8}>US 8</MenuItem>
                  <MenuItem value={9}>US 9</MenuItem>
                  <MenuItem value={10}>US 10</MenuItem>
                  <MenuItem value={11}>US 11</MenuItem>
                  <MenuItem value={12}>US 12</MenuItem>
                  <MenuItem value={13}>US 13</MenuItem>
                  <MenuItem value={14}>US 14</MenuItem>
                  <MenuItem value={15}>US 15</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Amount </InputLabel>
        <Input
          id="standard-adornment-amount"
          onChange={handleAmountChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <List className={classes.root}>
        <ListItem>
          <ListItemText
            primary="Transaction Fee (9.5%)"
            secondary={amount.transAmount}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText
            primary="Payment Proc. (3%)"
            secondary={amount.proccessingAmount}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Estimated Shipping" secondary="0" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Total Payout" secondary={amount.payOut} />
        </ListItem>
      </List>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleBillingInfoClick}
      >
        Proceed to Add Billing Information
      </Button>
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
