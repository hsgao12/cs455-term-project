import { React, useState, useEffect } from "react";
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
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
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
  }
}));
export default function ProductForBuyForm({
  props,
  size,
  setSize,
  amount,
  setAmount,
  setBillingInfo,
}) {
  const classes = useStyles();
  const [resultArray, setResultArray] = useState([]);
  const [error, setError] = useState('');
var distinct = [];
for (var i = 0; i < resultArray.length; i++){
  if (!distinct.includes(resultArray[i].size))
  distinct.push(resultArray[i].size)
}
 console.log(distinct) 
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/getSizeAndPrice/" + props.location.state.shoe._id)
      .then((res) => {
        setResultArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setSize(event.target.value);
    console.log(resultArray);
    //Math.max.apply(Math, array.map(function(o) { return o.y; }))
    var resultArrayForSelectedSize = []
    for (var i = 0; i < resultArray.length; i++){
      if (resultArray[i].size === event.target.value){
        resultArrayForSelectedSize.push(resultArray[i]);
      }
    }
    console.log(resultArrayForSelectedSize)
    var buyAmount = Math.min.apply(Math, resultArrayForSelectedSize.map(function(o) { return o.price; }))
    console.log(buyAmount)
    setAmount({
      intitialAmount: Number(buyAmount),
      proccessingAmount: 0.03 * Number(buyAmount),
      shippingAmount: 0.02 * Number(buyAmount),
      total: Number(buyAmount) + 0.03 * Number(buyAmount) + 0.02 * Number(buyAmount),
    });
  }
  const [value, setValue] = useState("");
  const handleSelectChange = (e) => setSize(e.target.value);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleBillingInfoClick = () => {
    if(size == undefined || size == '' ){
      setError("Size cannot be null, please select size of the sneaker for sale");
    }
    else{
      setError('');
      const initialBillingStatus= {
        billingInfo: true,
        billingInfoType: 'buy'
      }
      setBillingInfo(initialBillingStatus);
    }
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {error !== '' && (
        <Grid className={classes.bg} item xs={12} sm={12}>
          <Paper className={classes.paper}>{error}</Paper>
        </Grid>
      )}
      <br></br>
      <InputLabel>size</InputLabel>

      <Select onChange={handleChange}>
        {distinct.map((item) => {
          return (<MenuItem key={item} value={item}>{item}</MenuItem>);
        })}
      </Select>
      <FormControl fullWidth className={classes.margin}></FormControl>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="Amount"  secondary={amount.intitialAmount} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
        <ListItemText primary="(You are about to purchase this product at the lowest Ask price)"/>
        </ListItem>
       
        <ListItem>
          <ListItemText
            primary="Payment Proc. (3%)"
            secondary={amount.proccessingAmount}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText
            primary="Estimated Shipping (2%)"
            secondary={amount.shippingAmount}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary="Total" secondary={amount.total} />
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
