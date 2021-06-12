import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ReleasesGrid from '../../components/upcoming-releases/ReleasesCarousel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/login/Login';
import Register from '../../components/login/Register';
function Header() {
    return (
        <section>
            <Router>
                <section>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={ReleasesGrid} />
                        <Route path="/home" component={ReleasesGrid} />
                        <Route path="/login" component={Login} />
                        <Route path="/registration" component={Register} />
                    </Switch>

                </section>
            </Router>
        </section>
    )
}
export default Header;