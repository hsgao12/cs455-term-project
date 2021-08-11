import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'red',
    backgroundColor: '#ffcccc',
  },
  bg: {
    backgroundColor: '#ff7675',
  },
}));
export default function ProductForSaleForm({
  props,
  size,
  setSize,
  amount,
  setAmount,
  setBillingInfo,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState('');
  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleBillingInfoClick = () => {
      console.log(size);
      console.log(amount.intitialAmount);
      if(size == undefined || size == '' ){
        setError("Size cannot be null, please select size of the sneaker for sale");
      }
      else if(amount.intitialAmount == undefined || amount.intitialAmount == ""){
        setError("Please enter amount for sale");
      }
      else{
        setError('');
        const initialBillingStatus= {
          billingInfo: true,
          billingInfoType: 'sell'
        }
        setBillingInfo(initialBillingStatus);
      }
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
        {error !== '' && (
        <Grid className={classes.bg} item xs={12} sm={12}>
          <Paper className={classes.paper}>{error}</Paper>
        </Grid>
      )}
      <div>
        <Button onClick={handleClickOpen}>Select Size</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Pick Sneaker Size</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel>Size</InputLabel>
                <Select
                  onChange={handleChange}
                  input={<Input />}
                  style={{minWidth: 120}}
                >
                  <MenuItem value={1}>US 1</MenuItem>
                  <MenuItem value={1.5}>US 1.5</MenuItem>
                  <MenuItem value={2}>US 2</MenuItem>
                  <MenuItem value={2.5}>US 2.5</MenuItem>
                  <MenuItem value={3}>US 3.5</MenuItem>
                  <MenuItem value={4}>US 4</MenuItem>
                  <MenuItem value={4.5}>US 4.5</MenuItem>
                  <MenuItem value={5.5}>US 5</MenuItem>
                  <MenuItem value={6}>US 6</MenuItem>
                  <MenuItem value={6.5}>US 6.5</MenuItem>
                  <MenuItem value={7}>US 7</MenuItem>
                  <MenuItem value={7.5}>US 7.5</MenuItem>
                  <MenuItem value={8}>US 8</MenuItem>
                  <MenuItem value={8.5}>US 8.5</MenuItem>
                  <MenuItem value={9}>US 9</MenuItem>
                  <MenuItem value={9.5}>US 9.5</MenuItem>
                  <MenuItem value={10}>US 10</MenuItem>
                  <MenuItem value={10.5}>US 10.5</MenuItem>
                  <MenuItem value={11}>US 11</MenuItem>
                  <MenuItem value={11.5}>US 11.5</MenuItem>
                  <MenuItem value={12}>US 12</MenuItem>
                  <MenuItem value={12.5}>US 12.5</MenuItem>
                  <MenuItem value={13}>US 13</MenuItem>
                  <MenuItem value={13.5}>US 13.5</MenuItem>
                  <MenuItem value={14}>US 14</MenuItem>
                  <MenuItem value={14.5}>US 14.5</MenuItem>
                  <MenuItem value={15}>US 15</MenuItem>
                  <MenuItem value={16}>US 16</MenuItem>
                  <MenuItem value={17}>US 17</MenuItem>
                  <MenuItem value={18}>US 18</MenuItem>
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
