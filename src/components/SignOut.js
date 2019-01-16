import React from 'react';
import {Button, Form, FormGroup} from 'reactstrap';
import { auth } from '../firebase';


const SignOutButton = () =>
<Form>
<FormGroup>
  <Button
    onClick={auth.doSignOut}
    color = "primary"
    variant = "primary"
  >
    Sign Out
  </Button>
  </FormGroup>
  </Form>

export default SignOutButton;

