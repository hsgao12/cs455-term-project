import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
export default function ProductForSaleForm({ props, setSize, amount, setAmount, setBillingInfo }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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