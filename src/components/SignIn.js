import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';


const divStyle = {
  margin: 'auto',
  width: '50%',
  border: '3px solid black',
  padding: '10px',
};


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


const SignInPage = ({ history }) =>
  <div style={divStyle}>
    <Container>
      <h1>Sign In</h1>
      <p>If you are not signed in after 10 seconds of hitting sumbit, you must re-enter your information as it may be invalid. Thank you!</p>
      <SignInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </Container>
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey({ error }));
      });

    event.preventDefault();
  }

  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
    
        <Form onSubmit={this.onSubmit}>
        
          <FormGroup row>
          
            <Label for="exampleEmail" sm={2}>Email</Label>
            
            <Col sm={5}>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              getRef={(input) => (this.username = input)}
            />
            </Col>
          </FormGroup>
          
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={5}>
            <Input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            </Col>
          </FormGroup>
          
          <FormGroup check row>
            <Col sm={{ size: 5, offset: 2 }}>
              <Button variant="primary" disabled={isInvalid} type="submit">Submit</Button>
            </Col>
          </FormGroup>
         
          { error && <p>{error.message}</p> }
        </Form>
     
    );
  }
}


export default withRouter(SignInPage);


export {
  SignInForm,
};
