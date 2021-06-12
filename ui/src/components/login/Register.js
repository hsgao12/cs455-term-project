import { Button, Card, CardMedia, Container, Input, List, ListItem } from "@material-ui/core";
import React from "react";
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';

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

function Register(props) {
    return <Container maxWidth={"xs"} >
        <ThemeProvider theme={loginTheme}>
            <Card style={{ padding: "1em" }}>
                <CardMedia>
                    logo goes here
                </CardMedia>

                <List>
                    <ListItem> Choose Username: </ListItem>
                    <ListItem>
                        <Input>

                        </Input>
                    </ListItem>
                    <ListItem> Choose Password: </ListItem>
                    <ListItem>
                        <Input></Input>
                    </ListItem>
                    <ListItem>
                        <Button color={"primary"} variant={"contained"}>Register</Button>
                    </ListItem>
                </List>
            </Card>
        </ThemeProvider>
    </Container>
}
export default Register;