import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import ProductDetailPage from "./components/productDetailPage/productDetailPage";
import ProductSellPage from "./components/productSellPage/productSellPage";
import ProductBuyPage from "./components/productBuyPage/productBuyPage";
import { makeStyles, createMuiTheme, ThemeProvider, lighten, darken, useMediaQuery, createTheme } from '@material-ui/core';
import SearchPage from "./components/SearchPage/SearchPage";
import Admin from "./components/admin/admin";


const theme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
        },
        secondary: {
            main: '#FFFFFF',
        },
        nav: {
            main: "#333333"
        },
        search: {
            main: "#FFFF00",
            dark: "#DDDD00",
        },


    },

});

const useStyles = makeStyles({//can't use theme version
    app: {
        "@media()": {}
    }
});

function App() {

    const isAdmin = false;

    return (
        <div className="App">
            <ThemeProvider theme={theme}>

                <Router>
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            <Navbar />
                            <Switch>
                                <Route path="/shoes/:shoesId" component={ProductDetailPage} exact />
                                <PrivateRoute path={"/profile"} component={Profile} exact />
                                <Route path="/" component={HomePage} exact />
                                <Route path="/search/:query" component={SearchPage} exact />
                                <Route path="/search" component={SearchPage} exact />
                                <Route path="/ProductSellPage" component={ProductSellPage} exact />
                                <Route path="/ProductBuyPage" component={ProductBuyPage} exact />
                                <Route
                                    path="/Admin"
                                    render = {() => {
                                        return (
                                            isAdmin ?
                                                <Redirect to="/Admin"/>:
                                                <Redirect to="/" />
                                        )
                                    }}
                                    component={Admin}
                                />

                            </Switch>
                        </PersistGate>
                    </Provider>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
