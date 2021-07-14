import { ListItem, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    marginBottom: '15px',
  },
});

const FirstNameInput = (props) => {
  const classes = useStyles();
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const { firstName, setFirstName } = props;
  return (
    <ListItem className={classes.input}>
      <TextField
        className="firstNameInput"
        label="First Name"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={handleFirstNameChange}
      />
    </ListItem>
  );
};

export default FirstNameInput;
