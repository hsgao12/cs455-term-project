import {
  Button,
  Card,
  CardMedia,
  Container,
  Input,
  List,
  ListItem,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PasswordInput from './inputs/PasswordInput';
import EmailInput from './inputs/EmailInput';
import ConfirmPasswordInput from './inputs/ConfirmPasswordInput';

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

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <Container maxWidth={'xs'}>
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
              <Button color={'primary'} variant={'contained'}>
                Register
              </Button>
            </ListItem>
          </List>
        </Card>
      </ThemeProvider>
    </Container>
  );
}
export default Register;
