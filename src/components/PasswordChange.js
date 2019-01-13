import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <Form onSubmit={this.onSubmit}>
        
        <FormGroup row>
            <Label for="examplePassword" sm={2}>New password</Label>
            <Col sm={5}>
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New password (6 or more characters)"
            />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="examplePassword" sm={2}>Confirm new password</Label>
            <Col sm={5}>
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password "
            />
            </Col>
          </FormGroup>
          
          <FormGroup check row>
            <Col sm={{ size: 5, offset: 2 }}>
              <Button color="primary" outline color="danger" variant="danger" disabled={isInvalid} type="submit" bsStyle="danger">Reset password</Button>
            </Col>
          </FormGroup>
        </Form>
    );
  }
}

export default PasswordChangeForm;