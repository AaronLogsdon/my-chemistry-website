import React from 'react';
import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorisation from './withAuthorisation';

const divStyle = {
  margin: 'auto',
  width: '95%',
  height: '80vh',
  border: 'double 10px white',
  padding: '10px',
  backgroundColor: "#2086D3",
  color: "white",
};

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div style={divStyle}>
        <h1>Password change</h1>
        <h3>Account's email: {authUser.email}</h3>
        <h3>Account's ID: {authUser.uid}</h3>
        <p>Password change is automatic upon pressing the rest button. Enter the neccessary details below.</p>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorisation(authCondition)(AccountPage);