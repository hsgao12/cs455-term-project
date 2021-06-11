import React, {useState} from 'react';
import {Button, Input} from '@material-ui/core';
import {Container} from '@material-ui/core';
import './login.css'


function Login(props) {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");


    return <Container maxWidth={"xs"} className={"login-box-outer"}>
        <div className={"login-box"}>
            <div>Username:</div>
            <Input></Input>
            <div>Password:</div>
            <Input></Input>

            <Button color={"primary"} variant={"contained"} className={"login-button"}>Login</Button>
            <div>
                Don't have an account? <a href={"#"}>Click here to register</a>
            </div>
        </div>
    </Container>
}

function Register(props) {
    return <Container maxWidth={"xs"} className={"login-box-outer"}>
        <div className={"login-box"}>
            <div>Choose Username:</div>
            <Input></Input>
            <div>Choose Password:</div>
            <Input></Input>
            <div>Enter password again:</div>
            <Input></Input>

            <Button color={"primary"} variant={"contained"} className={"login-button"}>Register</Button>
            <div>

            </div>
        </div>
    </Container>
}

export function Dimmer(props) {
    return <div style={{position: "fixed", left: "0", right: "0", top: "0", bottom: "0"}}>
        <div style={{display: "grid", placeItems: "center"}}>
            <div>
                {props.children}
            </div>
        </div>
        <div
            style={
                {
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    background: "rgb(200,200,200)",
                    opacity: "0.5",
                    zIndex:"-1"
                }
            }
            onClick={props.onClose}/>
    </div>
}

export default Login;
