import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signin, setError, setLoading} from '../../store/actions/authActions';


import {
    Button, FormControl,
    List,
    ListItem,
    Typography
} from '@material-ui/core';

import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import {Card, Paper} from '@material-ui/core';

import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';
import ErrorAlert from '../ErrorAlert';

const useStyles = makeStyles({
    loginBody: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
    },
    headerText: {
        textAlign: 'center',
        marginBottom: '15px'
    }
});

function Login(props) {
    const setLoginFormOpen = props.setLoginFormOpen;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const dispatch = useDispatch();
    const {error, loading} = useSelector((state) => state.auth);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        };
    }, [error, dispatch]);

    const clickHandler = (e) => {
        if (error) {
            dispatch(setError(''));
        }
        dispatch(setLoading(true));
        dispatch(
            signin({email: email, password: password}, () => dispatch(setLoading(false)), setLoginFormOpen)
        );
    };

    const enterHandler = (e)=>{
        if(e.key==="Enter"){
            clickHandler(null);
        }
    };

    return (
        <Paper className={classes.loginBody}>
            <Card style={{padding: '1em'}} onKeyPress={enterHandler}>
                <Typography variant="h5" className={classes.headerText}> Login </Typography>
                {error != '' && <ErrorAlert error={error}/>}
                <List>

                    <EmailInput email={email} setEmail={setEmail}/>
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
                            onClick={clickHandler}
                            disabled={loading}
                        >
                            {loading ? "Loading" : "Login"}
                        </Button>
                    </ListItem>
                </List>
            </Card>
        </Paper>
    );
}

export default Login;
