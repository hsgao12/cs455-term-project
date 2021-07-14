import {
  Button,
  Card,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';

import ErrorAlert from '../ErrorAlert';

import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PasswordInput from './inputs/PasswordInput';
import EmailInput from './inputs/EmailInput';
import ConfirmPasswordInput from './inputs/ConfirmPasswordInput';
import FirstNameInput from './inputs/FirstNameInput';
import LastNameInput from './inputs/LastNameInput';

import { useDispatch, useSelector } from 'react-redux';
import { signup, setError, setLoading } from '../../store/actions/authActions';

const loginTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

const useStyles = makeStyles({
  registerBody: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
  },
  headerText: {
    textAlign: 'center',
    marginBottom: '15px',
  },
});

function Register(props) {
  const setRegisterFormOpen = props.setRegisterFormOpen;

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordsAreEqual, setPasswordsAreEqual] = useState(true);

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  useEffect(() => {
    setPasswordsAreEqual(password === confirmPassword);
  }, [password, confirmPassword]);

  const clickHandler = (e) => {
    if (error) {
      dispatch(setError(''));
    }
    dispatch(setLoading(true));
    dispatch(
      signup(
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
        () => dispatch(setLoading(false)),
        setRegisterFormOpen
      )
    );
  };

  // TODO: Change from list to grid

  return (
    <Paper className={classes.registerBody}>
      <Card style={{ padding: '1em' }}>
        <Typography variant="h5" className={classes.headerText}>
          {' '}
          Register{' '}
        </Typography>
        <List>
          {error !== '' && <ErrorAlert error={error} />}
          <EmailInput email={email} setEmail={setEmail} />
          <FirstNameInput firstName={firstName} setFirstName={setFirstName} />
          <LastNameInput lastName={lastName} setLastName={setLastName} />
          <PasswordInput password={password} setPassword={setPassword} />
          <ConfirmPasswordInput
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
          <ListItem alignItems="center">
            <Button
              color={'primary'}
              variant={'contained'}
              onClick={clickHandler}
              className={classes.button}
              disabled={!passwordsAreEqual || loading}
            >
              {loading ? 'Loading' : 'Register'}
            </Button>
          </ListItem>
          <ListItem alignItems="center">
            {!passwordsAreEqual && (
              <Paper
                style={{
                  color: 'red',
                  marginLeft: '0.3em',
                  fontSize: '0.8em',
                  padding: '0.3em',
                }}
              >
                Passwords must be equal
              </Paper>
            )}
          </ListItem>
        </List>
      </Card>
    </Paper>
  );
}

export default Register;
