import React, { Component } from 'react';//makes component feature available in the file
import { withRouter } from 'react-router-dom';//makes router feature avilable in the file
import { auth } from '../firebase';//makes auth file from firebase folder features avilable in the file
import * as routes from '../constants/routes';//makes all page routes from constants folder avilable in the file
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';//makes some styling features available
import { Link } from 'react-router-dom';//makes link features available




const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});//function allows me to compare form components


const SignInPage = ({ history }) =>//history keeps the user's page visit history for this page
  <div>
      <h1>SignIn</h1>
      <SignInForm history={history} />
  </div>//presents the sign in form

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};//intialises form input fields

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;//email and password are submitted upon clicking a button

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)//function that will sign a user in with an email and password
      .then(() => {
        this.setState({ ...INITIAL_STATE });//sets inputs back to initial state
        history.push(routes.HOME);//takes user to the home page upon submitting
      })
      .catch(error => {
        this.setState(byPropKey({ error }));//catches erros in logging in
      });

    event.preventDefault();//prevents default scenarios from occuring
  }

  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };//allowa the user to enter input into input fields


  render() {
    const {
      email,
      password,
      error,
    } = this.state;//these things are rendered for the form to work as expected

    const isInvalid =//invalid scenarios for the two input fields are set up
      password === '' ||
      email === '';

    return (//upon submitting, the form below is submitted and checked 
    
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
              getRef={(input) => (this.username = input)}//this input section makes sure a user enters a valid email into the email field
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
              placeholder="Password" //this input section makes sure a user enters a valid password into the password field
              />
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
     //part just above makes a button that becomes available to click after valid data is found, which causes the form to be submit
    );
  }
}

const SigninLink = () =>//below a link to the sign in page is made available by using its route
<p>
  <Link to={routes.SIGN_IN}>Sign in</Link>
</p>


export default withRouter(SignInPage);// the SignInPage is made available with router features


export {//SignInForm and SigninLink are made avaiable for use by other files
  SignInForm,
  SigninLink
};

