import React, { useState } from 'react';
import ReleasesGrid from './components/upcoming-releases/ReleasesCarousel';
import Login from './components/login/Login';
import { Modal } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Register from './components/login/Register';
import HomePage from './components/homepage/HomePage';

import { createStore } from 'redux';

import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/register" component={Register} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
