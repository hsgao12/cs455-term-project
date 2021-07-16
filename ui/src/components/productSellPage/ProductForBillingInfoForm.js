import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,DatePicker} from "@material-ui/pickers";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
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
export default function ProductForBillingInfoForm({ props, setBillingInfo }) {
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