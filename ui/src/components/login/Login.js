import React, { useState } from 'react';
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
import { Card } from '@material-ui/core';
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

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container maxWidth={'xs'}>
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
            <ListItem>
              <Link to={'/register'}>
                <a>Don't have an account? Click here to register</a>
              </Link>
            </ListItem>
          </List>
        </Card>
      </ThemeProvider>
    </Container>
  );
}

export default Login;
