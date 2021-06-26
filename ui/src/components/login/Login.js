import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  CardHeader,
  CardMedia,
  CssBaseline,
  Input,
  List,
  ListItem,
  TextField,
} from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Card, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

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
  loginBody: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
  },
});

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = useStyles();

  return (
    <Paper className={styles.loginBody}>
      <ThemeProvider theme={loginTheme}>
        <Card style={{ padding: '1em' }}>
          <CardMedia>logo goes here</CardMedia>
          <List>
            <EmailInput email={email} setEmail={setEmail} />
            <PasswordInput
              password={password}
              setPassword={setPassword}
              showable={true}
            />
            <ListItem>
              <Button
                className="loginButton"
                color={'primary'}
                variant={'contained'}
              >
                Login
              </Button>
            </ListItem>
          </List>
        </Card>
      </ThemeProvider>
    </Paper>
  );
}

export default Login;
