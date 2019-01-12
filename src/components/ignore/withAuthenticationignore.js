import React from 'react';//makes react available in the file
import AuthUserContext from './AuthUserContext';//makes features from the AuthUserContext file available
import { firebase } from '../firebase';//makes firebase file from firebase folder avilable

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
          authUser: null,//sets thr user to non-authenticated at start of session
        };
      }
  
      componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })//seeing if user is authenticated
            : this.setState({ authUser: null });//or unauthenticated
        });
      }
    render() {
        const { authUser } = this.state;
      return (//returns the authenticated state of user
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;//returns the component
}

export default withAuthentication;//creates a means of making the withAuthentication file available to other files
