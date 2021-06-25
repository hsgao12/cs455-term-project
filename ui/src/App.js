import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import { createStore } from 'redux';
import authReducer from './reducers/authReducer';
import { Provider } from 'react-redux';
import ProductDetailPage from "./components/productDetailPage/productDetailPage";

const store = createStore(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/productPage" component={ProductDetailPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
