import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect 
} from 'react-router-dom';


import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Dashboard from './Dashboard';
import Deck from './Deck';
import Test from './Test';
import Study from './Study';
import Game1 from './Game1';
import Game2 from './Game2';
import View from './View';
import List from './List';







import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import { Button } from 'reactstrap';


const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.DASHBOAD} component={Dashboard} />
      <Route exact path={routes.DECK} component={Deck} />
      <Route exact path={routes.TEST} component={Test} />
      <Route exact path={routes.STUDY} component={Study} />
      <Route exact path={routes.GAME1} component={Game1} />
      <Route exact path={routes.GAME2} component={Game2} />
      <Route exact path={routes.VIEW} component={View} />
      <Route exact path={routes.LIST} component={List} />
    </div>
  </Router>

export default withAuthentication(App);
