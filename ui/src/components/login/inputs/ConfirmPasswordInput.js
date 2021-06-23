import { ListItem, TextField } from '@material-ui/core';

const ConfirmPasswordInput = (props) => {
  const { confirmPassword, setConfirmPassword } = props;
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <ListItem>
      <TextField
        className="confirmPasswordInput"
        label="Confirm Password"
        variant="outlined"
        fullWidth
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
    </ListItem>
  );
};

export default ConfirmPasswordInput;
