import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
    const { authenticated } = useSelector((state) => state.auth);
    return (
        authenticated ? <Route path={props.path} exact={props.exact} component={props.component} /> : <Redirect to="/" />
    );
}

export default PrivateRoute;