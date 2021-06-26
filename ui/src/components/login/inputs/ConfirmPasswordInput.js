import { ListItem, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    "marginBottom": "15px"
  }
});


const ConfirmPasswordInput = (props) => {
  const { confirmPassword, setConfirmPassword } = props;
  const classes = useStyles();
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <ListItem>
      <TextField
        className={classes.input}
        label="Confirm Password"
        variant="outlined"
        fullWidth
        value={confirmPassword}
        type="password"
        onChange={handleConfirmPasswordChange}
      />
    </ListItem>
  );
};

export default ConfirmPasswordInput;
