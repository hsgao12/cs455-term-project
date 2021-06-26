import { TextField, ListItem, Button } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useState } from 'react';

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
  return (
    <ListItem>
      <TextField
        className="loginPasswordInput"
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
