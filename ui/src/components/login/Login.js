import React, {useState} from 'react';
import {Button, CardHeader, CardMedia, CssBaseline, Input, List, ListItem} from '@material-ui/core';
import {Container, Grid} from '@material-ui/core';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card} from '@material-ui/core';

const loginTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#4caf50'
        },
        secondary: {
            main: '#FFFFFF'
        }
    },
});
function Login(props) {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");


    return <Container maxWidth={"xs"} >
        <ThemeProvider theme={loginTheme}>
            <Card style={{padding: "1em"}}>
                <CardMedia>
                    logo goes here
                </CardMedia>

                <List>
                    <ListItem> Username: </ListItem>
                    <ListItem>
                        <Input>

                        </Input>
                    </ListItem>
                    <ListItem> Password: </ListItem>
                    <ListItem>
                        <Input></Input>
                    </ListItem>
                    <ListItem>
                        <Button color={"primary"} variant={"contained"}>Login</Button>
                    </ListItem>
                    <ListItem>
                        <a href={"#"}>Don't have an account? Click here to register</a>
                    </ListItem>
                </List>
            </Card>
        </ThemeProvider>
    </Container>
}


export default Login;
