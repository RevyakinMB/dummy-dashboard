import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';

import Header from './header'
import SignIn from './signin'
import Indicators from './indicators';
import Standards from './standards';
import ActualValues from './actual-values';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Route exact path={ROUTES.LANDING} component={ActualValues} />
          <Route path={ROUTES.ACTUAL_VALUES} component={ActualValues} />
          <Route path={ROUTES.INDICATORS} component={Indicators} />
          <Route path={ROUTES.SING_IN} component={SignIn} />
          <Route path={ROUTES.STANDARDS} component={Standards} />
        </Router>
      </div>
    );
  }
}

export default App;
