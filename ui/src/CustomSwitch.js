import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetailPage from './components/productDetailPage/productDetailPage';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/profile/Profile';
import HomePage from './components/homepage/HomePage';
import SearchPage from './components/SearchPage/SearchPage';
import ProductSellPage from './components/productSellPage/productSellPage';
import ProductBuyPage from './components/productBuyPage/productBuyPage';
import Admin from './components/admin/admin';
import { useSelector } from 'react-redux';

export default function CustomSwitch() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Switch>
      <Route path="/shoes/:shoesId" component={ProductDetailPage} exact />
      <PrivateRoute path={'/profile'} component={Profile} exact />
      <Route path="/" component={HomePage} exact />
      <Route path="/search/:query" component={SearchPage} exact />
      <Route path="/search" component={SearchPage} exact />
      <PrivateRoute path="/ProductSellPage" component={ProductSellPage} exact />
      <PrivateRoute path="/ProductBuyPage" component={ProductBuyPage} exact />
      {user?.isAdmin && <Route path="/Admin" component={Admin} />}
      <Redirect to="/" />
    </Switch>
  );
}
