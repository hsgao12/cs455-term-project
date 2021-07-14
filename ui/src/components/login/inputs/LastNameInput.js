import { ListItem, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    marginBottom: '15px',
  },
});

const LastNameInput = (props) => {
  const classes = useStyles();
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const { lastName, setLastName } = props;
  return (
    <ListItem className={classes.input}>
      <TextField
        className="lastNameInput"
        label="Last Name"
        variant="outlined"
        fullWidth
        value={lastName}
        onChange={handleLastNameChange}
      />
    </ListItem>
  );
};

export default LastNameInput;
