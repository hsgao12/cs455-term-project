import { TextField, ListItem, Button } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    "marginBottom": "15px"
  }
});


const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordButton = (
    <Button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </Button>
  );

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { password, setPassword, showable } = props;

  const classes = useStyles();

  return (
    <ListItem>
      <TextField
        className={classes.input}
        label="Password"
        variant="outlined"
        fullWidth
        type={showPassword ? 'Text' : 'Password'}
        InputProps={{
          endAdornment: showable ? showPasswordButton : null,
        }}
        value={password}
        onChange={handlePasswordChange}
      />
    </ListItem>
  );
};

export default PasswordInput;
