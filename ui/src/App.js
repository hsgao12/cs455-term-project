import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import { createStore } from 'redux';

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
            <Route path="/productPage" component={ProductDetailPage} />
            <Route path="/" component={HomePage} />
            {/* <Route path="/home" component={HomePage} />
            <Route path="/register" component={Register} /> */}
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
