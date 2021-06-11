import React from 'react';
import { Navbar, AboutPage, HomePage, RegistrationPage, LoginPage } from '../../common';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Header (){
    return(
        <section className="header">
            <Router>
           <section>
            <Navbar/>
            <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/registration" component={RegistrationPage}/>
            </Switch>
          
           </section>
           </Router>
        </section>
    )
}
export default Header;