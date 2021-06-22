import React, {useState} from 'react';
import {Button, CardHeader, CardMedia, CssBaseline, Input, List, ListItem} from '@material-ui/core';
import {Container, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card} from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from 'react-router-dom';

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
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    return (<Container maxWidth={"xs"}>
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
                        <Input type={showPassword ? "Text" : "Password"}/>
                        <Button onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button color={"primary"} variant={"contained"}>Login</Button>
                    </ListItem>
                    <ListItem>
                        <Link to={"/register"}>
                            <a>Don't have an account? Click here to register</a>
                        </Link>

                    </ListItem>
                </List>
            </Card>
        </ThemeProvider>
    </Container>)
}


export default Login;
