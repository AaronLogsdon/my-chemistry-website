import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import Dashboard from './Dashboard';
import Deck from './Deck';
import View from './View';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import AddDeck from './AddDeck';



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
      <Route exact path={routes.VIEW} component={View} />
      <Route exact path={routes.ADD_DECK} component={AddDeck} />
    </div>
  </Router>

export default withAuthentication(App);
