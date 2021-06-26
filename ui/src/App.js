import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import Profile from './components/profile/Profile'; 

import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';

import store from './store/store';

import { Provider } from 'react-redux';
import ProductDetailPage from "./components/productDetailPage/productDetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/productDetail" component={ProductDetailPage} exact/>
            <PrivateRoute path={"/profile"} component={Profile} exact/>
            <Route path="/" component={HomePage} exact/>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
