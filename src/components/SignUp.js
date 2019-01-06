import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';



const divStyle = {
  margin: 'auto',
  width: '50%',
  border: '3px solid black',
  padding: '10px',
};


const SignUpPage = ({ history }) =>
  <div div style = {divStyle}>
    <Container>
      <h1>Sign Up</h1>
      <p>If you are not signed up and in after 10 seconds of hitting sumbit, you must re-enter your information as it may be invalid. Thank you!</p>
      <SignUpForm history={history} />
    </Container>
  </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;

      const {
          history,
       } = this.props;
  
       auth.doCreateUserWithEmailAndPassword(email, passwordOne)
       .then(authUser => {
 
         // Create a user in your own accessible Firebase Database too
         db.doCreateUser(authUser.user.uid, username, email)
           .then(() => {
             this.setState({ ...INITIAL_STATE });
             history.push(routes.HOME);
           })
           .catch(error => {
             this.setState(byPropKey('error', error));
           });
 
       })
 
     event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
      <Form onSubmit={this.onSubmit}>

        <FormGroup row>
            <Label for="exampleUsername" sm={2}>Name</Label>
            <Col sm={5}>
            <Input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            </Col>
          </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={5}>
          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          </Col>
        </FormGroup>
        
        <FormGroup row>
            <Label for="examplePassword" sm={2}>passwordOne</Label>
            <Col sm={5}>
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password (six characters)"
            />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="examplePassword" sm={2}>PasswordTwo</Label>
            <Col sm={5}>
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
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



const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>


export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};

