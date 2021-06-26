import { ListItem, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    "marginBottom": "15px"
  }
});

const EmailInput = (props) => {
  const classes = useStyles();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const { email, setEmail } = props;
  return (
    <ListItem className={classes.input}>
      <TextField
        className="loginEmailInput"
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleEmailChange}
      />
    </ListItem>
  );
};

export default EmailInput;
