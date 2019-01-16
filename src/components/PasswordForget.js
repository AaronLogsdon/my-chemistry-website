import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const divStyle = {
  margin: 'auto',
  width: '95%',
  height: '80vh',
  border: 'double 10px white',
  padding: '10px',
  backgroundColor: "#2086D3",
  color: "white",
};

const PasswordForgetPage = () =>
 <div style={divStyle}>
    <h1>Password forget</h1>
    <p>An email will be sent to your email account upon pressing the reset button. Enter your email below.</p>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

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

          <FormGroup check row>
            <Col sm={{ size: 5, offset: 2 }}>
              <Button color="primary" outline color="danger" variant="danger" disabled={isInvalid} type="submit">Reset password</Button>
            </Col>
          </FormGroup>
         
          { error && <p>{error.message}</p> }

        </Form>
    );
  }
}



const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET} style = {{color: "navy"}}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};