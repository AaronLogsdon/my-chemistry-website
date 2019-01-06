import React from 'react';
import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorisation from './withAuthorisation';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Password change</h1>
        <h3>Account's email: {authUser.email}</h3>
        <p>Password change is automatic upon pressing the rest button.</p>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorisation(authCondition)(AccountPage);