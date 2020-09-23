import React, { Component,Fragment } from 'react';
import { Switch,Route, Redirect} from "react-router-dom";

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Header from '../layer/Header/Header';
import Footer from '../layer/Footer/Footer';


class AppRoute extends Component {

  render() {
    return (
      <Fragment>

        <Header />

        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Redirect from="/" to="/home" />
          <Route path='*' component={NotFound}/>
        </Switch>

        <Footer />

      </Fragment>
    )
  }
}

export default  AppRoute;