import {
  Button,
  Card,
  CardMedia,
  Container,
  Input,
  List,
  ListItem,
  Paper,
} from '@material-ui/core';

import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PasswordInput from './inputs/PasswordInput';
import EmailInput from './inputs/EmailInput';
import ConfirmPasswordInput from './inputs/ConfirmPasswordInput';

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
});

function Register(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const clickHandler = (e) => {
    setLoading(true);
    dispatch(
      signup({ email: email, password: password }, () => setLoading(false))
    );
  };

  return (
    <Paper className={classes.registerBody}>
      <ThemeProvider theme={loginTheme}>
        <Card style={{ padding: '1em' }}>
          <CardMedia>logo goes here</CardMedia>

          <List>
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput password={password} setPassword={setPassword} />
            <ConfirmPasswordInput
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
            <ListItem>
              <Button
                color={'primary'}
                variant={'contained'}
                onClick={clickHandler}
              >
                Register
              </Button>
            </ListItem>
          </List>
        </Card>
      </ThemeProvider>
    </Paper>
  );
}
export default Register;
