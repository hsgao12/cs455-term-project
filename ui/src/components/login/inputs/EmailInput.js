import { ListItem, TextField } from '@material-ui/core';

const EmailInput = (props) => {
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const { email, setEmail } = props;
  return (
    <ListItem>
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
